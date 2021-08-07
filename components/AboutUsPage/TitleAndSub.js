import React from "react";
import ls from "@/styles/AboutPage/TitleAndSub.module.css";

const TitleAndSub = () => {
  return (
    <div className={ls.header}>
      <h2 className="mx-auto mb-0 text-center">
        MEET <span className={ls.header_highlighter}>THE</span> TEAM
      </h2>
      <h6 className="text-center">
        The people behind this amazing innovation.
      </h6>
    </div>
  );
};

export default TitleAndSub;
