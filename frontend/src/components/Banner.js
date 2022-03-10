import React from "react";
const Banner = ({ title }) => {
  return (
    <header className="banner">
      <div className="bodybanner">
        <h1>{title}</h1>
        <div />
      </div>
    </header>
  );
};

export default Banner;
