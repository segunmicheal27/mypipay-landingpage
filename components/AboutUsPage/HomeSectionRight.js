import ls from "@/styles/AboutPage/HomeSectionRight.module.css";
import Image from "next/image";
import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { HiMail } from "react-icons/hi";

const HomeSectionRight = () => {
  return (
    <div
      className={`${ls.section} py-1 py-lg-5 d-flex flex-column align-content-center justify-content-center`}
    >
      <h2 className="mx-auto mb-0">
        ABOUT MY<span className={ls.header_highlighter}>Pi</span>PAY
      </h2>
      <p className="text-right mx-auto mb-4 p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        tempore aspernatur quis ex qui saepe maxime quod! Magni similique,
        provident quasi voluptas nulla harum. Perferendis, eum nemo. Velit non
        facere cum! Ipsum voluptas a sed dolore fugiat tempore nobis at.
      </p>
    </div>
  );
};

export default HomeSectionRight;
