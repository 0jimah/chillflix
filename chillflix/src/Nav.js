import "./Nav.css";
import logo from "./logo.jpg";
import avatar from "./avatar.png";
import { useEffect, useState } from "react";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" alt="Netflix Logo" src={logo} />
      <img className="nav__avatar" alt="Netflix Logo" src={avatar} />
    </div>
  );
};

export default Nav;
