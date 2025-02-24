import React from "react";
import "./Skills.css";
import htmlIcon from "../../assets/htmlIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import phpIcon from "../../assets/phpIcon.svg";
import nodeIcon from "../../assets/node.svg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skill-title"> Skills</span>
      {/* <span className='skill-desc'>Here are the key technologies I specialize in to build amazing websites and applications:</span> */}

      <div className="skill-progress-bar">
        <div className="skill-bar">
          <div className="skill-bar-text">
            <h2>
              <img src={htmlIcon} />
              HTML,CSS & JS
            </h2>
            <p>
              <span id="hcj"></span>
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-bar-text">
            <h2>
              <img src={reactIcon} />
              React JS
            </h2>
            <p>
              <span id="rj"></span>
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-bar-text">
            <h2>
              <img src={phpIcon} />
              PHP
            </h2>
            <p>
              <span id="php"></span>
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-bar-text">
            <h2>
              <img src={nodeIcon} />
              Node JS
            </h2>
            <p>
              <span id="node"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
