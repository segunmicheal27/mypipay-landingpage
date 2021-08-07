/* eslint-disable @next/next/no-img-element */
import ls from "@/styles/Reusable/ImageSection.module.css";
import React from "react";

const ImageSection = ({ src, alt = "", title = "", imgStyle }) => {
  return (
    <div className={`${ls.custom_img} p-2`}>
      <img src={src} alt={alt} title={title && ""} style={imgStyle} />
    </div>
  );
};

export default ImageSection;
