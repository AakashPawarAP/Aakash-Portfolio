import { Component } from "react";
import "./resume.css";
import ImgResume from "../images/resume-img.png";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

class Resume extends Component {
  render() {
    return (
      <div className="resume-main-container" id="resume">
        <h2>Resume</h2>
        <div className="underline" />
        <div className="resume-container">
          <div className="info-resume-container">
            <div className="work-ex">
              <h3>Work Experience</h3>
              <hr />
              <div className="work-ex-info">
                <div className="flex align-items space-between">
                  <div>
                    <h4>Full Stack Web Development Training Internship</h4>
                    <p>Prepbytes, Gurugram</p>
                  </div>
                  <span>Aug '21 - Present</span>
                </div>
              </div>
            </div>
            <div className="education">
              <h3>Education</h3>
              <hr />
              <div className="education-info">
                <div className="flex align-items space-between">
                  <div>
                    <h4>BE Electronics And Telecommunication Engineering</h4>
                    <p>Theem College of Engineering, Mumbai University </p>
                  </div>
                  <span>2020</span>
                </div>
                {/* <div className="flex align-items space-between">
                  <div>
                    <h4>Citizen's School, Surat</h4>
                    <p>HSC</p>
                  </div>
                  <span>2015-2016</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="img-resume-container">
            <img src={ImgResume} alt="resume-img" />
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/aakash-pawar-a54360179/"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a href="https://aakash-pawar.hashnode.dev/" target="_blank">
                <SiHashnode />
              </a>

              <a href="https://twitter.com/aakashpawar97" target="_blank">
                <AiFillTwitterCircle />
              </a>
              <a href="https://github.com/AakashPawarAP" target="_blank">
                <AiFillGithub />
              </a>

              <a
                href="https://www.instagram.com/_aakash_pawar__/"
                target="_blank"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
