import { GitFork } from "lucide-react";
import React from "react";

function Dashboard() {
  return (
    <div className="font-mono min-h-screen">
      <p className="flex items-center mb-2 gap-2 opacity-90">
        <GitFork className="stroke-[1px] rotate-180" /> Dashboard
      </p>
      <h1 className="text-[1.9rem] font-bold font-heading mb-4">
        Platform Dashboard
      </h1>
      <div className="flex items-start gap-4 w-full flex-col md:flex-row min-h-[300px]">
        <div className="bg-black/4 border border-black/7 p-4 min-h-[300px] rounded-lg w-full md:max-w-[65%]"></div>
        <div className="bg-black/4 border border-black/7 p-4 min-h-[300px] rounded-lg w-full md:max-w-[35%]"></div>
      </div>
      <div className="flex items-start gap-4 w-full flex-col md:flex-row min-h-[300px] mt-4 ">
        <div className="bg-black/4 border border-black/7 p-4 min-h-[300px] rounded-lg w-full "></div>
        <div className="bg-black/4 border border-black/7 p-4 min-h-[300px] rounded-lg w-full "></div>
        <div className="bg-black/4 border border-black/7 p-4 min-h-[300px] rounded-lg w-full "></div>
      </div>
    </div>
  );
}

export default Dashboard;
