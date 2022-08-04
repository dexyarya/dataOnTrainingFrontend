import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import AllTraining from "./components/training/AllTraining";
import Detail from "./components/training/detail/DetailTraining";
import Create from "./components/create/Create";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteAll from "./components/ProtectedRouteAll";
import { ContextWrapper } from "./context/Context";
import FilterSection from "./components/filterSection/FilterSection";
import ToggleView from "./components/toggleView/ToogleView";

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <Router>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route element={<ProtectedRouteAll />}>
              <Route
                path="dashboard"
                element={
                  <>
                    <Dashboard />
                    <FilterSection />
                    <ToggleView />
                  </>
                }
              />
              <Route path="/training" element={<AllTraining />} />
              <Route path="/training/:id" element={<Detail />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/training/create" element={<Create />} />
                {/* <Route path="/training/edit/:id" element={<Edit />} /> */}
              </Route>
            </Route>
          </Routes>
        </Router>
      </ContextWrapper>
    </div>
  );
}

export default App;
