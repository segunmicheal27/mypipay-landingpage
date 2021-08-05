import HomeBanner from "@/components/LandingPage/HomeBanner";
import HomeFooter from "@/components/LandingPage/HomeFooter";
import HomeSectionLeft from "@/components/LandingPage/HomeSectionLeft";
import HomeSectionRight from "@/components/LandingPage/HomeSectionRight";
import HomeSlider from "@/components/LandingPage/HomeSlider";
import TopNavBarMain from "@/components/LandingPage/TopNavBarMain";
import TopNavBarAddon from "@/components/LandingPage/TopNavBarAddon";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>My PiPay</title>
        <meta name="description" content="Borderless Transactions" />
      </Head>
      <Container fluid className="p-0 mb-lg-5">
        <Row className="g-0">
          <Col xs={12} sm={12} md={12} lg={9} xl={8} xxl={8}>
            <TopNavBarMain />
          </Col>
          <Col lg={3} xl={4} xxl={4}>
            <TopNavBarAddon />
          </Col>
        </Row>
        <Row className="g-0 mb-lg-5">
          <Col xs={12} sm={12} md={12} lg={9} xl={8} xxl={8} className="order-last order-lg-first">
            <HomeSlider />
          </Col>
          <Col lg={3} xl={4} xxl={4} className="order-first order-lg-last">
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
