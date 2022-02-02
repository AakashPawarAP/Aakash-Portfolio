import { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container" id="portfolio">
        <h2>My Portfolio</h2>
        <div className="underline"></div>
        <div className="portfolio-img-container">
          <a
            href="https://blog-app-react-with-nodejs.netlify.app/"
            target="_blank"
          >
            <div className="item1 items">
              <h3>The Siren - Blog App</h3>
            </div>
          </a>
          <a href="https://aakashpawarap.github.io/ToDoJS-App/" target="_blank">
            <div className="item2 items">
              <h3>ToDo App</h3>
            </div>
          </a>
          <a
            href="https://aakashpawarap.github.io/Digital-Clock/"
            target="_blank"
          >
            <div className="item3 items">
              <h3>Clock App</h3>
            </div>
          </a>
          <a
            href="https://aakashpawarap.github.io/CSS-Assessment6-SaharaSafari/"
            target="_blank"
          >
            <div className="item4 items">
              <h3>Sahara Travel Guide</h3>
            </div>
          </a>
          <a
            href="https://aakashpawarap.github.io/CSS-Assessment5-Animation/transition.html"
            target="_blank"
          >
            <div className="item5 items">
              <h3>CSS Transition and Animation Guide App</h3>
            </div>
          </a>
          <a href="" target="_blank">
            <div className="item6 items">
              <h3>Personal Portfolio</h3>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
