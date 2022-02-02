import { Component } from "react";
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import About from "../about/about";
import Resume from "../resume/resume";
import Footer from "../footer/footer";
import Contact from "../contact/contact";
// import Testimonials from "../testimonials/testimonials";
import Portfolio from "../portfolio/portfolio";
import "./main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
