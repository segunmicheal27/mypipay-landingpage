/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "react-bootstrap";
import ls from "@/styles/AboutPage/TeamMemberImage.module.css";

const TeamMemberImage = ({
  src,
  alt,
  title,
  fullName,
  role,
  level = 1 || 2,
}) => {
  return (
    <Card
      className={`${
        level === 1 ? ls.lvl_one : ls.lvl_two
      }  text-white rounded-0 border-0 `}
    >
      <Card.Img
        className={`${ls.bg_image} rounded-0`}
        src={src || "/images/teamMemberImage_plachholder.png"}
        alt={alt || "Becky Cruz, NA"}
        title={title || "Becky Cruz, NA"}
      />
      <Card.ImgOverlay className="d-flex">
        <div className="align-self-end">
          <Card.Title className={`${ls.name} mb-0`}>
            {fullName || "Becky Cruz, NA"}
          </Card.Title>
          <Card.Text className={`${ls.role}`}>
            {role || "Co-Founder, CEO"}
          </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default TeamMemberImage;
