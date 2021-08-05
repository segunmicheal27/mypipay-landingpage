import ls from "@/styles/LandingPage/HomeFooter.module.css";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <Container fluid className={`${ls.footer} p-3 px-lg-5 pt-lg-5 pb-3`}>
      <div
        className={`d-flex flex-column flex-lg-row justify-content-between align-content-end`}
      >
        <div>
          <div>
            <Image
              src="/footer_logo.png"
              height={100}
              width={110}
              alt="App phone mockup"
              title="App phone mockup"
            />
          </div>
        </div>
        <div className="mb-sm-3 mb-lg-0 align-self-end">
          <div
            className={`${ls.footer_center} d-flex flex-column  align-content-end justify-content-start justify-content-lg-center `}
          >
            <h5 className="text-center">COMING SOON!!!</h5>
            <div className="d-flex justify-content-center mx-auto">
              <Image
                src="/applestore_download_button.png"
                className="px-1"
                height={40}
                width={150}
                alt="Download From Apple Store button"
                title="Download from Apple Store"
              />
              <Image
                src="/playstore_download_button.png"
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
            <div className={`${ls.footer_right} text-lg-end align-self-end text-center mx-3 order-last order-lg-first`}>
              <h6 className="my-2">FOLLOW US ON</h6>
              <div className="d-flex justify-content-center justify-content-lg-end mx-auto my-2">
                <Image
                  src="/instagram_icon.png"
                  className="px-1"
                  height={30}
                  width={40}
                  alt="Instagram"
                  title="Instagram"
                />
                <Image
                  src="/facebook_icon.png"
                  className="px-1"
                  height={30}
                  width={40}
                  alt="Facebook"
                  title="Facebook"
                />
                <Image
                  src="/twitter_icon.png"
                  className="px-1"
                  height={30}
                  width={40}
                  alt="Twitter"
                  title="Twitter"
                />
              </div>
            </div>
            <div>
              <Image
                src="/qrcode.png"
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
