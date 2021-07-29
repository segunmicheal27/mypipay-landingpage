import Head from "next/head";
import Image from "next/image";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import HomeBanner from "../components/HomeBanner";
import HomeFooter from "../components/HomeFooter";
import HomeSectionLeft from "../components/HomeSectionLeft";
import HomeSectionRight from "../components/HomeSectionRight";
import HomeSlider from "../components/HomeSlider";
import Jumbotron from "../components/HomeSlider";
import TopNavBarAddon from "../components/TopNavBarAddon";
import TopNavBarMain from "../components/TopNavBarMain";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>My PiPay</title>
        <meta name="description" content="Borderless Transactions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className="p-0 mb-5">
        <Row className="g-0">
          <Col xs={12} sm={12} md={12} lg={9} xl={8} xxl={8}>
            <TopNavBarMain />
          </Col>
          <Col lg={3} xl={4} xxl={4}>
            <TopNavBarAddon />
          </Col>
        </Row>
        <Row className="g-0 mb-5">
          <Col xs={12} sm={12} md={12} lg={9} xl={8} xxl={8}>
            <HomeSlider />
          </Col>
          <Col lg={3} xl={4} xxl={4}>
            <HomeBanner />
          </Col>
        </Row>
        <Row className="g-0 align-items-stretch">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <HomeSectionLeft />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <HomeSectionRight />
          </Col>
        </Row>
      </Container>
      <HomeFooter />
    </>
  );
}
