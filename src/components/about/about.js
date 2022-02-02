import { Component } from "react";
import ImgAbout from "../images/about-img.png";
import ImgHtml from "../images/html-logo.png";
import ImgCss from "../images/css-logo.png";
import ImgJs from "../images/js-logo.png";
import ImgReact from "../images/react-logo.png";
import ImgGh from "../images/github-logo.png";
import ImgPy from "../images/python-logo.png";
import ImgScss from "../images/scss-logo.png";
import ImgNodeJs from "../images/nodeJS-logo.png";
import ImgExpressJs from "../images/expressJS-logo.png";
import ImgNetlify from "../images/netlify-logo.png";
import ImgHeroku from "../images/heroku-logo.png";

import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="about-container" id="about">
        <div className="img-about-conatiner">
          <img src={ImgAbout} alt="about-img"></img>
        </div>
        <div className="info-about-conatiner">
          <h2>About Me</h2>
          <div className="underline" />
          <p>
            Passionate Full Stack Web Developer with MERN as a stack having
            hands-on experience in developing scalable webapps using a wide
            range of front-end and back-end skills and best code practices.
            Developed 15+ websites/webapps from scratch at Prepbytes.
            {/* I am
            dedicated to perfecting my craft by learning from more seasoned
            developers, remaining humble, and continuously making strides to
            learn all that I can about development. */}
            {/* who is proﬁcient in creating
            interactive webapps . I am good at determining the structure and
            design of web pages, striking a balance between functional and
            aesthetic design, and ensuring web design is optimized for
            smartphones. */}
          </p>
          <p>
            I am dedicated to perfecting my craft by learning from more seasoned
            developers, remaining humble, and continuously making strides to
            learn all that I can about development. <br></br>When I am free I
            love gaming, writing development blogs and try to learn latest
            technologies and trends.
          </p>
          <div className="tech-logos">
            <h5>Languages/Library/Technology</h5>
            <div className="tech-logos-flex">
              <img src={ImgHtml} alt="html-logo" />
              <img src={ImgCss} alt="css-logo" />
              <img src={ImgJs} alt="js-logo" />
              <img src={ImgReact} alt="react-logo" />
              <img src={ImgGh} alt="github-logo" />
              <img src={ImgPy} alt="python-logo" />
              <img src={ImgScss} alt="scss-logo" />
              <img src={ImgNodeJs} alt="nodeJS-logo" />
              <img src={ImgExpressJs} alt="expressJS-logo" />
              <img src={ImgNetlify} alt="noetlify-logo" />
              <img src={ImgHeroku} alt="heroku-logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
