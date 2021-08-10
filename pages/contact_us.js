import FooterAddon from "@/components/ContactUsPage/FooterAddon";
import HomeSectionLeft from "@/components/ContactUsPage/HomeSectionLeft";
import HomeSectionRight from "@/components/ContactUsPage/HomeSectionRight";
import HomeFooter from "@/components/Reusable/HomeFooter";
import TopNavBarAddon from "@/components/Reusable/TopNavBarAddon";
import TopNavBarMain from "@/components/Reusable/TopNavBarMain";
import Head from "next/head";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const contact_us = () => {
  return (
    <>
      <Head>
        <title>MyPiPay | Contact Us</title>
        <meta name="description" content="Contact us for Borderless Transactions" />
      </Head>
      <Container fluid className="p-0 mb-2">
        <Row className="g-0">
          <Col xs={12} sm={12} md={12} lg={9} xl={8} xxl={8}>
            <TopNavBarMain />
          </Col>
          <Col lg={3} xl={4} xxl={4}>
            <TopNavBarAddon />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col xs={12} lg={6} className="order-last order-lg-first">
            <HomeSectionLeft />
          </Col>
          <Col xs={12} lg={6} className="order-first order-lg-last">
            <HomeSectionRight />
          </Col>
        </Row>
      </Container>
      <FooterAddon />
      <HomeFooter />
    </>
  );
};

export default contact_us;
