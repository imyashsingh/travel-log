import React from "react";

import { Route, Switch, Link } from "react-router-dom";
import image from "./Images/4.jpg";
import email from "./Images/email.png";
import yash from "./Images/yash1.jpg";
import puneet from "./Images/puneet1.jpeg";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <h1 style={{ color: "white", fontSize: "3.5rem" }}>About Us</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "30vw",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            style={{ borderRadius: "50%", height: "100px", width: "100px" }}
            src={yash}
            alt="Yash Singh"
          />
          <h2 style={{ fontSize: "2rem", color: "white", marginBottom: 0 }}>
            Yash Singh
          </h2>
          <p style={{ fontSize: "1rem", color: "white", width: "20vw" }}>
            I am a final Year B.Tech(CSE) student.I am a 4 Star Coder at Cose
            Chef. I love to work on new and creative Projects.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "30vw",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <img
            style={{ borderRadius: "50%", height: "100px", width: "100px" }}
            src={puneet}
            alt="Puneet Kumar Rohtela"
          />
          <h2 style={{ fontSize: "2rem", color: "white", marginBottom: 0 }}>
            Puneet Kumar Rohtela
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "white",
              width: "20vw",
            }}
          >
            I am currently working at Daffodil Software pvt. Ltd. I love to
            Innovating things related to computer science.
          </p>
        </div>
      </div>
      <h1 style={{ color: "white", fontSize: "2.5rem", marginTop: "40px" }}>
        Contact Us
      </h1>
      <a href="mailto:yash.singh5445@gmail.com">
        <button className="button1">
          <img
            style={{ height: "30px", width: "30px" }}
            src={email}
            alt="email"
          />
        </button>
      </a>
    </div>
  );
};

export default About;

const styles = {
  container: {},
};
