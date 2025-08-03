import {
  Building2,
  Building2Icon,
  Calendar,
  Home,
  LogOut,
  User,
} from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pb from "../../lib/pb";

function SideBar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="p-2 fixed left-0 top-0 bottom-0 bg-black flex flex-col items-center pt-4 gap-6 w-[60px]">
      <img src="/logoOnly.svg" className="w-full mb-10" alt="" />
      <div
        onClick={() => navigate("/")}
        className={`w-7 h-7 rounded-md ${
          location === "/" && "bg-white"
        } p-1.5 flex items-center justify-center cursor-pointer`}
      >
        <Home className={`${location === "/" ? "text-black" : "text-white"}`} />
      </div>
      <div
        onClick={() => navigate("/date")}
        className={`w-7 h-7 rounded-md ${
          location === "/date" && "bg-white"
        } p-1.5 flex items-center justify-center cursor-pointer`}
      >
        <Calendar
          className={`${location === "/date" ? "text-black" : "text-white"}`}
        />
      </div>

      <div
        onClick={() => navigate("/revenue")}
        className={`w-7 h-7 rounded-md ${
          location === "/revenue" && "bg-white"
        } p-1.5 flex items-center justify-center cursor-pointer`}
      >
        <Building2Icon
          className={`${location === "/revenue" ? "text-black" : "text-white"}`}
        />
      </div>
      <div
        onClick={() => navigate("/profile")}
        className={`w-7 h-7 rounded-md ${
          location === "/profile" && "bg-white"
        } p-1.5 flex items-center justify-center cursor-pointer`}
      >
        <User
          className={`${location === "/profile" ? "text-black" : "text-white"}`}
        />
      </div>
      <div
        onClick={() => navigate("/settings")}
        className={`w-7 h-7 rounded-md ${
          location === "/settings" && "bg-white"
        } p-1.5 flex items-center justify-center cursor-pointer`}
      >
        <Building2Icon
          className={`${
            location === "/settings" ? "text-black" : "text-white"
          }`}
        />
      </div>
      <LogOut
        className="text-white w-7 h-7 rounded-md p-1.5 cursor-pointer hover:bg-white/10 transition-all duration-200 ease-in-out"
        onClick={() => {
          pb.authStore.clear();
          navigate("/login");
        }}
      />
    </div>
  );
}

export default SideBar;
