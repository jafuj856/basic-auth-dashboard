import React from "react";

const UnderMaintenance = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f8f8",
        color: "#333",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>🚧 Under Maintenance</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        We're currently working on improvements. Please check back later!
      </p>
    </div>
  );
};

export default UnderMaintenance;
