import React, { createContext, useState, useEffect } from "react";
import instance from "../API/API";
export const AppContext = createContext();

export const ContextWrapper = (props) => {
  const [training, setTrainingData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });
  //filter Section

  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const [status, setStatus] = useState("");
  const handleChangeStatus = (e) => {
    setStatus(e === "isOnline" ? true : false);
  };

  const [completed, setCompleted] = useState("");
  const handleChangeCompleted = (e) => {
    setCompleted(e === "isCompleted" ? true : false);
  };

  useEffect(() => {
    getDataTraining(search, status, completed);
    // getDataMyTraining();
  }, [search, status, completed]);

  async function getDataTraining(search = "", status, completed) {
    handleStateTraiing("isLoading", true);

    try {
      const response = await instance.get(
        `trainings?eventName=${search}&isOnline=${status}&isCompleted=${completed}`
      );
      handleStateTraiing("data", response.data);
    } catch (err) {
      handleStateTraiing("isError", true);
    }
    handleStateTraiing("isLoading", false);
  }
  const [items, setItems] = useState([]);

  const getDataScroll = async () => {
    try {
      const response = await instance.get(`trainings?page=2&limit=20`);
      setItems(response.data);
    } catch (err) {
      console.log("err");
    }
  };

  const infiniteScrolldata = async () => {
    const newData = await getDataScroll();
    setItems(...items, ...newData);
  };

  const handleStateTraiing = (field, value) => {
    setTrainingData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [tableViews, setTableView] = useState(false);
  const handleClick = () => {
    setTableView(!tableViews);
  };

  return (
    <AppContext.Provider
      value={{
        training,
        items,
        infiniteScrolldata,
        onSearch,
        handleChangeStatus,
        handleChangeCompleted,
        tableViews,
        handleClick,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
