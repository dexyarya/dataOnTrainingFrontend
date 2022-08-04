import { Table, Card, Badge } from "antd";
import React, { useState, useEffect, useContext } from "react";
import "../trainingTable/TrainingTable.css";
import instance from "../../API/API";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { columns } from "./AllTrainingTableViewData";

const AllTrainingTableView = () => {
  const { training, status, completed } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPages] = useState(1);
  const [pages, setPages] = useState(1);

  async function getData() {
    try {
      const response = await instance.get(`trainings?page=${pages}&limit=10`);
      setData([...response.data]);
      setTotalPages(training.data.length);
    } catch (err) {
      if (err) {
        Navigate("/missing");
      }
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const setPagination = (page) => {
    setPages(page);
  };
  useEffect(() => {
    getData();
  }, [pages, status, completed]);

  return (
    <>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
        }}
        title={
          <Badge
            title="All Training Event"
            className="site-badge-count-109"
            count={training.data.length}
            offset={[23, 16]}
            color="#e6f7ff"
            style={{
              backgroundColor: "#D6EFED",
              color: "#40a9ff",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              All Training Event
            </div>
          </Badge>
        }
      >
        <Table
          columns={columns}
          dataSource={data}
          size={"small"}
          pagination={{
            defaultCurrent: 1,
            PageSize: 10,
            size: "default",
            total: totalPage,
            onChange: (page) => {
              setPagination(page);
            },
          }}
          className="tableClass"
        />
      </Card>
    </>
  );
};

export default AllTrainingTableView;
