import ls from "@/styles/ContactUsPage/HomeSectionLeft.module.css";
import Image from "next/image";
import React from "react";
import {} from "react-bootstrap";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const HomeSectionLeft = () => {
  return (
    <>
      <div className={`${ls.section} mb-5`}>
        <h1 className={`fs-1 fw-bolder mb-3`}>CONTACT US</h1>
        <p>
          <FaMapMarkerAlt className="mr-1" /> Lakeview, kariba No. 7,
          Livingstone, Zambia
        </p>
        <p>
          <FaPhoneAlt className="mr-1" /> +2347066886477
        </p>
        <p>
          <HiMail className="mr-1" /> contact@mypipay.com
        </p>
      </div>
      <div className={`${ls.section} mb-5`}>
        <h3 className={`fs-3 fw-bolder mb-3`}>FOLLOW US</h3>
        <div className="d-flex justify-content-start">
          <Image
            src="/images/instagram_icon_dark.png"
            className="px-1"
            height={30}
            width={40}
            alt="Instagram"
            title="Instagram"
          />
          <Image
            src="/images/facebook_icon_dark.png"
            className="px-1"
            height={30}
            width={40}
            alt="Facebook"
            title="Facebook"
          />
          <Image
            src="/images/twitter_icon_dark.png"
            className="px-1"
            height={30}
            width={40}
            alt="Twitter"
            title="Twitter"
          />
        </div>
      </div>
    </>
  );
};

export default HomeSectionLeft;
