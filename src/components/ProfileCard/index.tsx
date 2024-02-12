import React from "react";
import Link from "next/link";
import "./styles.scss";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import profilePic from "@/assets/profile-pic.jpg";

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <div className="profile-card">
      <div className="profile-picture-container">
        <Image src={profilePic} alt="Profile" />
      </div>
      <div className="profile-info">
        <h2 className="name">Muhammed Ashik</h2>
        <p className="profession">Software Engineer</p>
        <div className="social-links">
          <Link href="https://www.instagram.com/ashikswanderlens">
            <FaInstagram className="icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ashikqmuhammed">
            <FaLinkedin className="icon" />
          </Link>
          <Link href="https://t.me/ashikqmuhammed">
            <FaTelegram className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
