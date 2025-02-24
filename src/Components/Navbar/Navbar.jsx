import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link"; //This is a solution to React Router's issue of not scrolling to #hash-fragments when using the <Link> component to navigate.
import homeIcon from "../../assets/homeIcon.svg";
import contactIcon from "../../assets/contactIcon-white.svg";
import workIcon from "../../assets/workIcon.svg";
import skillsIcon from "../../assets/setting.png";
import { useLocation } from "react-router-dom";
import Menu from '../../assets/Menu.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const section = location.hash.replace("#", ""); //it replaces the #intro = intro, #works=work - removes # from url
    setActiveSection(section);
  }, [location]);

  //when clicked redirects to the contact page
  // const RedirectContact = () => {
  //   document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <nav className="navbar">
      <div className="desktop-menu">
        <HashLink
          to="/#intro"
          className="desktop-menu-list-item home-link"
          scroll={() => window.scrollTo({ top: 0 })} //scrolls to top of the page when home gets clicked-it ignores the default scrolling behavior
        >
          <img src={homeIcon} alt="Home" className="desktop-menu-img-left" />
          Home
        </HashLink>

        <HashLink to="/#skills" className="desktop-menu-list-item skills-link">
          <img
            src={skillsIcon}
            alt="Skills"
            className="desktop-menu-img-left skills"
          />
          Skills
        </HashLink>

        <HashLink to="/#works" className="desktop-menu-list-item projects-link">
          <img
            src={workIcon}
            alt="Projects"
            className="desktop-menu-img-left"
          />
          Projects
        </HashLink>
      </div>

      <HashLink
        to="/#contact"
        className="desktop-menu-list-item-right contact-link"
      >
        <img
          src={contactIcon}
          alt="Contact"
          className="desktop-menu-img-right"
        />
        Contact me
      </HashLink>
      {/* responsive designs */}

      <img
        src={Menu}
        alt="Menu"
        className="ph-menu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="nav-menu" style={{ display: showMenu ? "flex" : "none" }}>
        <HashLink
          to="/#intro"
          className="list-item"
          onClick={() => setShowMenu(false)}
          scroll={() => window.scrollTo(0, 0)}
        >
          Home
        </HashLink>
        <HashLink
          to="/#skills"
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Skills{" "}
        </HashLink>
        <HashLink
          to="/#works"
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </HashLink>
        <HashLink
          to="/#contact"
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
