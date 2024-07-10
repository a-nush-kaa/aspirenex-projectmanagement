import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="nav_bar"
        style={{
          backgroundColor: "rgb(248 254 127)",
          height: "100px",
          display: "flex",
          alignItems: "center",
          margin: "10",
          justifyContent: "center",
        }}
      >
        <div className="nav">
          <h1 className="text-4xl font-bold">Manage Your Projects here!</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;