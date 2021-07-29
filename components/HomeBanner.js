import Image from "next/image";
import React from "react";
import ls from "../styles/HomeBanner.module.css";

const HomeBanner = () => {
  return (
    <div className={`${ls.banner} p-2`}>
      {/* <Image src="/home_banner.png" layout="fill" alt="home banner" /> */}
    </div>
  );
};

export default HomeBanner;
