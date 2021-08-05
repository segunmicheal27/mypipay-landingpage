import ls from "@/styles/LandingPage/HomeSectionLeft.module.css";
import Image from "next/image";
import React from "react";

const HomeSectionLeft = () => {
  return (
    <div className={ls.custom_img}>
      <Image
        src="/app_phone_mockup.png"
        alt="App phone mockup"
        title="App phone mockup"
        layout="fill"
        className={ls.unset}
      />
    </div>
  );
};

export default HomeSectionLeft;
