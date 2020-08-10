import React, { Component } from "react";
import profilePic from "../assets/profilepic.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <img
          src={profilePic}
          alt="MainImage"
          className="img-fluid w-25 rounded-circle d-block mx-auto mt-5"
        />
        <h2 className="mx-auto w-50 text-center mt-2 text-white">
          Hello, I am Kshitij
        </h2>

        <div className="mx-auto w-50 text-center mt-5">
          <a href="/#" className="btn btn-outline-light btn-lg">
            My Resume
          </a>
          <a href="/#" className="btn btn-outline-light ml-2 btn-lg">
            My Work
          </a>
          <a href="/#" className="btn btn-outline-light ml-2 btn-lg">
            Contact Me
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
