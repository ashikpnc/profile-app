import React from "react";
import "./styles.scss";
import Image from "next/image";
import profilePic from "@/assets/profile-pic.jpg"

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <div className="profile-card">
      <div className="profile-picture-container">
        {/* Replace the image source with your actual profile picture */}
        <Image  src={profilePic} alt="Profile"  />
      </div>
      <div className="profile-info">
        <h2 className="name">Muhammed Ashik</h2>
        <p className="profession">Software Engineer</p>
      </div>
    </div>
  );
};

export default ProfileCard;
