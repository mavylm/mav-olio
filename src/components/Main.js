import React from "react";
import Fade from "react-reveal/Fade";

const Main = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Fade left>
          <div className="glitch-container">
            <div className="glitch" data-text="MAVIS LIM">
              MAVIS LIM
            </div>
            <div className="glow">MAVIS LIM</div>
            <p className="subtitle">based in Singapore</p>
          </div>

          <div className="content-title">
            <h2>
              Full-stack Developer <span className="slash">/</span>
              <span className="slash2">/</span>
              <br />
              Graphic Designer
            </h2>
          </div>
          <div className="content-subtitle">
            <h4>I love creating & building things</h4>
          </div>
          <div className="btns">
            <a href="mailto:mavislimhm@gmail.com" className="btn">
              <span className="link-inner">Let's Make Something Together!</span>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Main;
