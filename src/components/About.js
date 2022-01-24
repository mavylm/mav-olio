import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { SiJira } from "react-icons/si";
import { IoLogoBitbucket } from "react-icons/io";
import Ae from "../img/Ae.svg";
import Ai from "../img/Ai.svg";
import Pr from "../img/Pr.svg";
import Ps from "../img/Ps.svg";
import Id from "../img/Id.svg";
import Xd from "../img/Xd.svg";
import jest from "../img/jest.svg";
import rtl from "../img/rtl.svg";
import mysql from "../img/mysql.svg";
import mavy from "../img/mavy.png";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="about">
          <div className="about-text">
            <Fade top>
              <img src={mavy} alt="Mavy" className="about-img" />
            </Fade>
            <Fade left>
              <div className="bio">
                <h1>Creating Something From Nothing</h1>
                <p>
                  I enjoy dabbling in different creative works and messing
                  around with designs and softwares as a hobby. I'm drawn to new
                  experiences and anything aesthethically pleasing. I love the
                  satisfaction of creating something with my own hands and mind.
                </p>
              </div>
            </Fade>
          </div>

          <Fade right>
            <div className="about-text">
              <h1>Skills</h1>
              <p>
                <div class="skills-grid">
                  <div class="each-skill">
                    <FaHtml5 size="3em" /> <span class="each-text">HTML 5</span>
                  </div>
                  <div class="each-skill">
                    <FaCss3Alt size="3em" />
                    <span class="each-text">CSS 3</span>
                  </div>
                  <div class="each-skill">
                    <FaJs size="3em" />
                    <span class="each-text">Javascript</span>
                  </div>
                </div>

                <div class="skills-grid">
                  <div class="each-skill">
                    <FaReact size="3em" />
                    <span class="each-text">React</span>
                  </div>
                  <div class="each-skill">
                    <img src={jest} alt="Jest" width="45px" />
                    <span class="each-text">Jest</span>
                  </div>
                  <div class="each-skill">
                    <img src={rtl} alt="React Testing Library" width="45px" />
                    <span class="each-text">React Testing Library</span>
                  </div>
                </div>

                <div class="skills-grid">
                  <div class="each-skill">
                    <FaSass size="3em" />
                    <span class="each-text">Sass</span>
                  </div>
                  <div class="each-skill">
                    <FaBootstrap size="3em" />
                    <span class="each-text">Bootstrap</span>
                  </div>
                  <div class="each-skill">
                    <FaGitAlt size="3em" />
                    <span class="each-text">Git</span>
                  </div>
                </div>

                <div class="skills-grid">
                  <div class="each-skill">
                    <FaNodeJs size="3em" />
                    <span class="each-text">Node.js</span>
                  </div>
                  <div class="each-skill">
                    <FaJava size="3em" />
                    <span class="each-text">Java</span>
                  </div>
                  <div class="each-skill">
                    <img src={mysql} alt="MySQL" width="45px" />
                    <span class="each-text">MySQL</span>
                  </div>
                </div>

                <div class="skills-grid">
                  <div class="each-skill">
                    <DiScrum size="3em" />
                    <span class="each-text">Agile/Scrum</span>
                  </div>
                  <div class="each-skill">
                    <SiJira size="3em" />
                    <span class="each-text">Jira</span>
                  </div>
                  <div class="each-skill">
                    <IoLogoBitbucket size="3em" />
                    <span class="each-text">BitBucket</span>
                  </div>
                </div>

                <div class="skills-grid">
                  <div class="each-skill">
                    <img src={Ps} alt="Photoshop" width="45px" />
                    <span class="each-text">Photoshop</span>
                  </div>
                  <div class="each-skill">
                    <img src={Ai} alt="Illustrator" width="45px" />
                    <span class="each-text">Illustrator</span>
                  </div>
                  <div class="each-skill">
                    <img src={Pr} alt="Premiere Pro" width="45px" />
                    <span class="each-text">Premiere Pro</span>
                  </div>
                </div>

                <div class="skills-grid">
                  <div class="each-skill">
                    <img src={Ae} alt="After Effects" width="45px" />
                    <span class="each-text">After Effects</span>
                  </div>
                  <div class="each-skill">
                    <img src={Id} alt="InDesign" width="45px" />
                    <span class="each-text">InDesign</span>
                  </div>
                  <div class="each-skill">
                    <img src={Xd} alt="XD" width="45px" />
                    <span class="each-text">XD</span>
                  </div>
                </div>
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
