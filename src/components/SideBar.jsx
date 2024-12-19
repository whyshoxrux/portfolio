import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faFileLines, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="lefttSideBar sideBar fixed top-1/4 left-0 flex flex-col items-start justify-start gap-7 p-4">
      <div className="icon-container flex flex-row items-center justify-start cursor-pointer relative mt-2 hover:w-48">
        <a
          href="https://github.com/whyshoxrux?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icn text-2xl " />
        </a>
        <a
          href="https://github.com/whyshoxrux?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            GitHub
          </span>
        </a>
      </div>
      <div className="icon-container flex flex-row items-center justify-start cursor-pointer relative hover:w-48">
        <a
          href="https://www.linkedin.com/in/shohruxbek-tohirov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icn text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/shohruxbek-tohirov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            LinkedIN
          </span>
        </a>
      </div>
      <div className="icon-container flex flex-row items-center justify-start cursor-pointer relative hover:w-48">
        <Link to="/resume">
          <FontAwesomeIcon icon={faFileLines} className="icn text-2xl " />
        </Link>
        <Link to="/resume">
          <span className="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            Resume
          </span>
        </Link>
      </div>
      <div className="icon-container flex flex-row items-center justify-start cursor-pointer relative mb-2 hover:w-48">
        <a
          href="https://mail.google.com/mail/?view=cm&to=tohirovshohruxbek@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icn text-xl " />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=tohirovshohruxbek@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-name left-7 absolute opacity-0 top-1/2 -translate-y-1/2 p-2.5">
            Mail
          </span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
