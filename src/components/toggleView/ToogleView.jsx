import React, { useContext } from "react";
import AllTrainingTableView from "../trainingTable/AllTrainingTableView";
import AllTrainingEvent from "../training/AllTraining";
import { AppContext } from "../../context/Context";
import MyTrainingCard from "../myTraining/MyTraining";
import MyTrainingTableView from "../myTrainingTableView/MyTrainingTableView";

function ToggleView() {
  const { search, tableViews } = useContext(AppContext);
  return (
    <div>
      {tableViews ? <MyTrainingTableView /> : <MyTrainingCard />}
      {tableViews ? (
        <AllTrainingTableView />
      ) : (
        <AllTrainingEvent search={search} />
      )}
    </div>
  );
}

export default ToggleView;
