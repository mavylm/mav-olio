import React from "react";
import {
  FaDiscord,
  FaFacebookMessenger,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="contact">
          <Fade top>
            <h1>Let's Create Something Together!</h1>
            <p>Or say Hello!</p>
          </Fade>
          <Fade left>
            <span className="divider"></span>
          </Fade>
          <Fade bottom>
            <p>
              <ul>
                <li>
                  <a
                    href="https://discord.com/app"
                    title="mavy#9999"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li>
                  <a href="http://m.me/mavylm" target="_blank" rel="noreferrer">
                    <FaFacebookMessenger />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mavylm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mavylm/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitch.tv/azukera"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitch />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mavislimhm/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="mailto:mavislimhm@gmail.com">
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
