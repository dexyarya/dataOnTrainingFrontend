import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const roles = localStorage.getItem("roles");
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h1>Ini dashboard</h1>
        {roles === "ROLE_ADMIN" && (
          <button
            onClick={() => {
              navigate("/training/edit/id:");
            }}
          >
            edit
          </button>
        )}
        {roles === "ROLE_ADMIN" && (
          <button
            onClick={() => {
              navigate("/training/create");
            }}
          >
            create
          </button>
        )}

        <button
          onClick={() => {
            navigate("/training");
          }}
        >
          Training
        </button>
        <button onClick={handleClick}>LogOut</button>
      </div>
    </>
  );
};

export default Dashboard;
