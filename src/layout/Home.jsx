import React from "react";
import SideBar from "../components/navbars/SideBar";
import { Outlet } from "react-router-dom";
import TopBAr from "../components/navbars/TopBAr";

function Home() {
  return (
    <div className="w-full flex">
      <SideBar />

      <main className="ml-[60px]  w-full min-h-screen">
        <TopBAr />
        <div className="p-4 md:p-6 w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Home;
