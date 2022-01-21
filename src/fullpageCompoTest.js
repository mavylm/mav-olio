import React from "react";
import "./App.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import Social from "./components/Social";

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    css3={true}
    anchors={["main", "about", "work", "contact"]}
    navigation={true}
    navigationPosition="right"
    slidesNavigation={true}
    slidesNavPosition="bottom"
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            <div className="section">
              <Social />
              <p>Section 1 (welcome to fullpage.js)</p>>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
            <div className="section">
              <p>Section 3</p>
            </div>
            <div className="section">
              <p>Section 4</p>
            </div>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

export default Fullpage;
