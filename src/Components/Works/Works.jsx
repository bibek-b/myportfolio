import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Works.css";
import Netflixclone from "../../assets/ProjectsImages/featuredImg/Netflixclone.png";
import Geminiclone from "../../assets/ProjectsImages/featuredImg/Geminiclone.png";
import Glassguru from "../../assets/ProjectsImages/featuredImg/Glassguru.png";
import Favsoc from "../../assets/ProjectsImages/featuredImg/Favsoc.png";

const Works = () => {
  const [showMore, setShowMore] = useState(false);
  let id;

  return (
    <section id="works">
      <h2 className="works-title">Featured Projects</h2>
      <div className="projects">
        <div className="project">
          <img src={Favsoc} alt="Portfolio 1" className="works-img" />
          <Link to={`/projects/${(id = 1)}`}>
            {/* passing id in url */}
            <button className="project-btn">View Project</button>
          </Link>
        </div>
        <div className="project">
          <img src={Glassguru} alt="Portfolio 1" className="works-img" />
          <Link to={`/projects/${(id = 2)}`}>
            <button className="project-btn">View Project</button>
          </Link>
        </div>
        <div className={`project ${showMore ? "show" : ""}`}>
          <img src={Netflixclone} alt="Portfolio 1" className="works-img" />
          <Link to={`/projects/${(id = 3)}`}>
            <button className="project-btn">View Project</button>
          </Link>
        </div>
        <div className={`project ${showMore ? "show" : ""}`}>
          <img src={Geminiclone} alt="Portfolio 1" className="works-img" />
          <Link to={`/projects/${(id = 4)}`}>
            <button className="project-btn">View Project</button>
          </Link>
        </div>
      </div>
      <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "See Less" : "See More"}
      </button>
    </section>
  );
};

export default Works;
