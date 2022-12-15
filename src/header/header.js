import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <nav className="header">
        <section className="logo">
          <img src={require("../images/instaclone.png")} alt="logo" />
        </section>
        <section className="camera-icon">
          <img src={require("../images/camera.png")} alt="camera-icon" />
        </section>
      </nav>
    </>
  );
};

export default Header;
