import React from "react";
import FilterSection from "../filterSection/FilterSection";
import ToggleView from "../toggleView/ToogleView";
import Breadcrumbs from "../breadcrumb/Breadcrumb";

const Dashboard = () => {
  return (
    <div>
      <div style={{ paddingTop: "13px" }}>
        <Breadcrumbs />
        <FilterSection />
        <ToggleView />
      </div>
    </div>
  );
};

export default Dashboard;
