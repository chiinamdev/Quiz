import React from "react";
import Header from "../Header/Header";
import SideBar from "./SideBar";
import  "./Admin.scss";
import { Outlet } from "react-router";
import Order from "../tainwindcss/order";
import FormExample from "../Content/CreatUserModel";


const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar></SideBar>
      </div>
      <div className="admin-content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
// src/components/Header.js


export default Admin;
