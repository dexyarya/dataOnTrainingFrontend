import React, { useContext } from "react";
import AllTrainingTableView from "../trainingTable/AllTrainingTableView";
import AllTrainingEvent from "../training/AllTraining";
import { AppContext } from "../../context/Context";

function ToggleView() {
  const { search, tableViews } = useContext(AppContext);
  return (
    <div>
      {tableViews ? "ini tanble view" : "ini Trainingcard"}
      {tableViews ? (
        <AllTrainingTableView />
      ) : (
        <AllTrainingEvent search={search} />
      )}
    </div>
  );
}

export default ToggleView;
