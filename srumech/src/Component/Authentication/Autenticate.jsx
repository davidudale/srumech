import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";

const Autenticate = () => {
  return (
    <div className="flex flex-row bg-neutral-300 h-screen w-screen overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Autenticate;
