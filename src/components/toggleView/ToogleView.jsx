import React, { useContext } from "react";
// import MyTrainingCard from "../MyTrainingCard/MyTrainingCard";
// import MyTrainingTableView from "../MyTrainingTableView/MyTrainingTableView";
import AllTrainingTableView from "../trainingTable/AllTrainingTableView";
import AllTrainingEvent from "../training/AllTraining";
import { AppContext } from "../../context/Context";

function ToggleView() {
  const { search, tableViews } = useContext(AppContext);
  return (
    <div>
      {tableViews
        ? // <MyTrainingTableView />
          "ini tanble data"
        : // <MyTrainingCard search={search} />
          "ini card"}
      {tableViews ? (
        <AllTrainingTableView />
      ) : (
        <AllTrainingEvent search={search} />
      )}
    </div>
  );
}

export default ToggleView;
