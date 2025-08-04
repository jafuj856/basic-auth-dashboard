import React from "react";

const UnderMaintenance = () => {
  return (
    <div
      className="h-full flex flex-col items-center justify-center p-[2rem] min-h-[70vh] text-[#333] text-center bg-[#f8f8f8]"
      style={{}}
    >
      <h1 style={{ fontSize: "3rem" }}>🚧 Under Maintenance</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        We're currently working on improvements. Please check back later!
      </p>
    </div>
  );
};

export default UnderMaintenance;
