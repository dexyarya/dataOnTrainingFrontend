import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import AllTraining from "./components/training/AllTraining";
import CreateTrainingEvent from "./components/formTraining/CreateTrainingEvent";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteAll from "./components/ProtectedRouteAll";
import { ContextWrapper } from "./context/Context";
import ModalView from "./components/modalView/ModalView";

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route element={<ProtectedRouteAll />}>
              <Route
                path="dashboard"
                element={
                  <>
                    <Dashboard />
                    <ModalView />
                  </>
                }
              />
              <Route path="/training" element={<AllTraining />} />
              <Route element={<ProtectedRoute />}>
                <Route
                  path="/training/create"
                  element={<CreateTrainingEvent />}
                />
                <Route
                  path="/training/edit/:id"
                  element={<CreateTrainingEvent />}
                />
              </Route>
            </Route>
          </Routes>
        </Router>
      </ContextWrapper>
    </div>
  );
}

export default App;
