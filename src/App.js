import React from "react";
import "./App.scss";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["Main", "About", "Portfolio", "Contact"];

const App = () => (
  <>
    <Nav />
    <Footer />
    <ReactFullpage
      scrollingSpeed={1000}
      loopTop={true}
      loopBottom={true}
      anchors={anchors}
      navigation
      navigationPosition={"right"}
      scrollOverflow={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Main />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <Portfolio />
            </div>
            <div className="section">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default App;
