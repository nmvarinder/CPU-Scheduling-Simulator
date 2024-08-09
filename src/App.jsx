import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/compo/Header";
import Loading from "./screen/loader/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  );
};

export default App;
