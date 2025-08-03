import {
  Bell,
  HousePlus,
  MessageCircle,
  Package,
  Search,
  Settings,
} from "lucide-react";
import React from "react";

function TopBAr() {
  return (
    <div className="w-full flex items-center justify-between p-2 px-4 pt-5 md:flex-row flex-col">
      <div className="w-full max-w-[250px] flex items-center justify-center px-2 bg-black/7 border border-black/10 rounded-md">
        <Search className="h-5 stroke-[1px] text-black/50" />
        <input
          type="text"
          className="w-full bg-transparent outline-none h-8 p-2 text-sm"
          placeholder="Search Events"
          name=""
          id=""
        />
      </div>
      <div className="hidden items-center gap-3 font-sans font-normal text-xs md:text-sm md:flex">
        <div className="flex items-center justify-center p-1 px-2 gap-2 border rounded-md">
          New Clinte <HousePlus className="stroke-[1px]" />
        </div>
        <div className="flex items-center justify-center p-1 px-2 gap-2  rounded-md text-white bg-black">
          New Work Order <Package className="stroke-[1px]" />
        </div>
        <div className="flex items-center justify-center p-1  gap-2 border border-black/20 rounded-md">
          <Settings className="stroke-[1px]" />
        </div>
        <div className="flex items-center justify-center p-1  gap-2 border border-black/20 rounded-md">
          <MessageCircle className="stroke-[1px]" />
        </div>
        <div className="flex items-center justify-center p-1  gap-2 border border-black/20 rounded-md relative">
          <span className="absolute top-[15%] right-[32%] bg-red-500 w-1.5 h-1.5 rounded-full"></span>
          <Bell className="stroke-[1px]" />
        </div>

        <img
          src="/pro.png"
          alt=""
          className="w-8 h-8 rounded-md object-cover "
        />
      </div>
    </div>
  );
}

export default TopBAr;
