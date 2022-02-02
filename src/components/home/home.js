import { Component } from "react";
import Img from "../images/dev-img.png";
// import Resume from "../resume/resume";
import "./home.css";
// import Resume from "../images/Resume.pdf";
import Resume from "../images/Aakash's Resume (5).pdf";
class Home extends Component {
  render() {
    return (
      <div className="home-container" id="home">
        <div className="info-home-container">
          <h1>
            Hi, I'am Aakash Pawar
            <br />
            <span>Full Stack Web Developer | MERN Stack Developer</span>
          </h1>
          <br />
          <p>Get ready to turn ideas into reality</p>
          <div className="flex-buttons">
            <button className="btn btn1">
              <a href="#contact">Hire Me</a>
            </button>
            <button className="btn btn2">
              <a href={Resume} download>
                Get Resume
              </a>
            </button>
          </div>
        </div>
        <div className="img-home-container">
          <img src={Img} alt="dev-img"></img>
        </div>
      </div>
    );
  }
}

export default Home;
