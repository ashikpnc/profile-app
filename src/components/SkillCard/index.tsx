import React from "react";
import { FaDesktop, FaServer, FaDatabase, FaCloud } from "react-icons/fa";
import "./styles.scss";
import { MdLanguage } from "react-icons/md";

const SkillCard = () => {
  return (
    <div className="skill-card">
      <div className="skill1 skill-item">
        <FaDesktop className="icon" />
        <span className="skill-title">Web Apps</span>
      </div>
      <div className="skill2 skill-item">
        <FaServer className="icon" />
        <span className="skill-title">REST APIs</span>
      </div>
      <div className="skill3 skill-item">
        <FaDatabase className="icon" />
        <span className="skill-title">Database Design</span>
      </div>
      <div className="skill4 skill-item">
        <MdLanguage className="icon" />
        <span className="skill-title">PWA Apps</span>
      </div>
    </div>
  );
};

export default SkillCard;
