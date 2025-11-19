import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Card from "../page/Card";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const HomeLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto ">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default HomeLayout;
