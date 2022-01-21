import { React, useState } from "react";
import {
  FaPencilAlt,
  FaCode,
  FaGithub,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import { coding, projects } from "../data";
import Modal from "./Modal.js";
import Fade from "react-reveal/Fade";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const expandModal = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShow(false);
  };

  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="slide portfolio">
          <Fade top>
            <h2>
              <FaPencilAlt />
            </h2>
            <h1 className="creative">Design</h1>
          </Fade>
          <Fade bottom>
            <div className="container">
              {projects.map((project) => (
                <div className="img-container">
                  <img src={project.image} alt="Design" className="image" />
                  <div className="overlay" onClick={() => expandModal(project)}>
                    <div className="info">
                      <div className="title">{project.title}</div>
                      <div className="category">{project.category}</div>
                      {/* <div className="icon">
                        <FaPlusSquare onClick={() => expandModal(project)} />
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
              <Modal
                onClose={closeModal}
                show={show}
                title={selectedProject && selectedProject.title}
                images={selectedProject && selectedProject.gallery}
                description={selectedProject && selectedProject.description}
              />
            </div>
          </Fade>
        </div>
        <div className="slide portfolio">
          <Fade top>
            <h2>
              <FaCode />
            </h2>
            <h1 className="coding">Coding</h1>
          </Fade>
          <Fade bottom>
            <div className="container">
              {coding.map((project) => (
                <div className="img-container">
                  <img src={project.image} alt="Coding" className="image" />
                  <div className="overlay">
                    <div className="info">
                      <div className="title">{project.title}</div>
                      <div className="category">{project.category}</div>
                      <span className="icon">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub size={"2em"} />
                        </a>
                      </span>
                      <span className="icon">
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaExternalLinkSquareAlt size={"2em"} />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
