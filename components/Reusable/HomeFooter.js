import ls from "@/styles/Reusable/HomeFooter.module.css";
// import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";

const HomeFooter = () => {
  const imgAppleStoreSrc = require('../../public/images/applestore_download_button.png?resize&size=200');
  const imgPlayStoreSrc = require('../../public/images/playstore_download_button.png?resize&size=200');
  const imgQrcodeSrc = require('../../public/images/qrcode.png?resize&size=100');
  const imgInstagramIconSrc = require('../../public/images/instagram_icon.png?resize&size=100');
  const imgFacebookIconSrc = require('../../public/images/facebook_icon.png?resize&size=100');
  const imgTwitterIconSrc = require('../../public/images/twitter_icon.png?resize&size=100');
  const imgFooterLogoSrc = require('../../public/images/footer_logo.png?resize&size=100');

  return (
    <Container fluid className={`${ls.footer} p-3 px-lg-5 pt-lg-5 pb-3`}>
      <div
        className={`d-flex flex-column flex-lg-row justify-content-between align-content-end`}
      >
        <div className="mb-4 mb-lg-0">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgFooterLogoSrc.src}
              height={76}
              width={110}
              alt="App phone mockup"
              title="App phone mockup"
            />
            <h3 className="fw-bolder mb-0">
              My<span className={ls.header_highlighter}>Pi</span>Pay
            </h3>
          </div>
        </div>
        <div className="mb-4 mb-lg-0 align-self-start align-self-lg-end">
          <div className={`${ls.footer_center} d-flex flex-column `}>
            <h5 className="text-lg-center">COMING SOON!!!</h5>
            <div className="d-flex justify-content-center ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgAppleStoreSrc.src}
                className="px-1"
                height={40}
                width={150}
                alt="Download From Apple Store button"
                title="Download from Apple Store"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgPlayStoreSrc.src}
                className="px-1"
                height={40}
                width={150}
                alt="Get it From Google Play button"
                title="Get it From Google Play"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-start justify-content-lg-end">
            <div
              className={`${ls.footer_right} text-lg-end align-self-end text-center mx-3 order-last order-lg-first`}
            >
              <h6 className="my-2">FOLLOW US ON</h6>
              <div className="d-flex justify-content-center justify-content-lg-end mx-auto my-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgInstagramIconSrc.src}
                  className="px-1"
                  height={30}
                  width={40}
                  alt="Instagram"
                  title="Instagram"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgFacebookIconSrc.src}
                  className="px-1"
                  height={30}
                  width={40}
                  alt="Facebook"
                  title="Facebook"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgTwitterIconSrc.src}
                  className="px-1"
                  height={30}
                  width={40}
                  alt="Twitter"
                  title="Twitter"
                />
              </div>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgQrcodeSrc.src}
                height={100}
                width={100}
                alt="qr code"
                title="qr code"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeFooter;
