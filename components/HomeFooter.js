import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ls from "../styles/HomeFooter.module.css";

const HomeFooter = () => {
  return (
    <Container fluid className={`${ls.footer} p-5 align-items-stretch`}>
      <Row className="gy-5">
        <Col xs={12} lg={4}>
          <div className="d-flex justify-content-center justify-content-lg-start mx-auto">
            <Image
              src="/footer_logo.png"
              height={100}
              width={110}
              alt="App phone mockup"
              title="App phone mockup"
            />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div
            className={`${ls.footer_center} d-flex flex-column align-content-center justify-content-lg-center justify-content-start text-center`}
          >
            <h5>COMING SOON!!!</h5>
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
        </Col>
        <Col xs={12} lg={4}>
          <div className="d-flex justify-content-start justify-content-lg-end">
            <div className={`${ls.footer_right} text-lg-end text-center mx-3`}>
              <h6 className="my-2">FOLLOW US</h6>
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
              <a href="#home" className="my-2">
                <h6>mypipay.com</h6>
              </a>
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
        </Col>
      </Row>
    </Container>
  );
};

export default HomeFooter;
