import ls from "@/styles/AboutPage/HomeSectionRight.module.css";
import React from "react";

const HomeSectionRight = () => {
  return (
    <div
      className={`${ls.section} py-1 py-lg-5 d-flex flex-column align-content-center justify-content-center`}
    >
      <h2 className="mx-auto mb-0">
        ABOUT My<span className={ls.header_highlighter}>Pi</span>PAY
      </h2>
      <p className="text-right mx-auto mb-4 p-2">
        This project is intending to leverage on pi power to create a virtual
        credit card that can be used all over the globe and convert or live
        exchange of pi to any local currency. Purchase of goods and services has
        been a great challenges in the world, problem of government police on
        money transaction. The main idea 💡 of this project is to bridges the
        limitations of purchasing of any goods and services online using pi
        currency.
      </p>
    </div>
  );
};

export default HomeSectionRight;
