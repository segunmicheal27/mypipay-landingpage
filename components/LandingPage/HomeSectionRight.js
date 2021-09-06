import ls from "@/styles/LandingPage/HomeSectionRight.module.css";
// import Image from "next/image";
import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { HiMail } from "react-icons/hi";

const HomeSectionRight = () => {
    const imgAppleStoreSrc = require('../../public/images/applestore_download_button.png?resize&size=200');
    const imgPlayStoreSrc = require('../../public/images/playstore_download_button.png?resize&size=200');
  return (
    <div className={`${ls.section} text-center py-1 py-lg-5 d-flex flex-column align-content-center justify-content-center`}>
      <h2 className="text-center mx-auto mb-0">
        JOIN My<span className={ls.header_highlighter}>Pi</span>PAY TODAY
      </h2>
      <p className="text-center mx-auto mb-4">
        Join our community and receive updates on latest developments
      </p>
      <div className="text-center mx-auto mb-4">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <HiMail color="#1f0553" size={18} />
          </InputGroup.Text>
          <FormControl
            className={ls.subscribe_input}
            placeholder="example@mail.com"
            aria-label="email"
          />
          <Button className={`${ls.subscribe_button}`}>Subscribe</Button>
        </InputGroup>
      </div>

      <h6>COMING SOON!!!</h6>
      <div className="mx-auto">
        <div className="d-flex justify-content-center mx-auto">
          <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgAppleStoreSrc.src}
              className="px-1"
              height={40}
              width={150}
              alt="Download From Apple Store button"
              title="Download from Apple Store"
            />
          </div>
          <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgPlayStoreSrc}
              className="px-1"
              height={40}
              width={150}
              alt="Get it From Google Play button"
              title="Get it From Google Play"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionRight;
