import React from "react";
import "./Get.css";
import nan from "../images/nan.webp";
import lastz from "../images/lastz.webp";
import { Link } from "react-router-dom";

const Get = () => {
  return (
    <div>
      <section className="top">
        <Link to="/">
          <img src={nan}></img>
        </Link>
        <ul>
          <Link to="/login" className="lin">
            <li>Log in</li>
          </Link>
          <Link to="signup" className="lin">
            <li>Sign up</li>
          </Link>
        </ul>
      </section>
      <hr />
      <section className="end">
        <div>
          <img src={lastz}></img>
        </div>
        <div>
          <h1>Get the Zomato App</h1>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en">
          CLICK HERE TO DOWNLOAD
        </a>
      </section>
    </div>
  );
};

export default Get;
