import React from "react";
import "./landing-page.css";
import { Link } from "react-router-dom";

const Landing_page = () => {
  return (
    <>
      <section className="home">
        <section className="home-herounit">
          <img src={require("../images/landing-page.jpg")} />
        </section>
        <section className="home-intro">
          <h1 className="home-title">10X Team 4</h1>
          <Link to="posts">
            <button>Enter</button>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Landing_page;
