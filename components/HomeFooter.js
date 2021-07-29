import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ls from "../styles/HomeFooter.module.css";

const HomeFooter = () => {
  return (
    <Container fluid className={`${ls.footer} p-3`}>
      <Row>
        <Col>
          <div className={ls.custom_img}>
            <Image
              src="/footer_logo.png"
              height={100}
              width={120}
              alt="App phone mockup"
              title="App phone mockup"
            />
          </div>
        </Col>
        <Col>
          <div className={`${ls.footer_center} text-center`}>
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
        <Col>right</Col>
      </Row>
    </Container>
  );
};

export default HomeFooter;
