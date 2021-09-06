import HomeBanner from "@/components/LandingPage/HomeBanner";
import HomeSectionRight from "@/components/LandingPage/HomeSectionRight";
import HomeSlider from "@/components/LandingPage/HomeSlider";
import HomeFooter from "@/components/Reusable/HomeFooter";
import ImageSection from "@/components/Reusable/ImageSection";
import TopNavBarAddon from "@/components/Reusable/TopNavBarAddon";
import TopNavBarMain from "@/components/Reusable/TopNavBarMain";
import Head from "next/head";

import { Col, Container, Row } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <Head>
        <title>MyPiPay</title>
        <meta name="description" content="Borderless Transactions" />
      </Head>
      <Container fluid className="p-0 mb-lg-5">
        <Row className="g-0">
          <Col xs={12} sm={12} md={12} lg={9} xl={8} xxl={8}>
            <TopNavBarMain />
          </Col>
          <Col lg={3} xl={4} xxl={4}>
            <TopNavBarAddon darkMode={true} />
          </Col>
        </Row>
        <Row className="g-0 mb-lg-5">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={9}
            xl={8}
            xxl={8}
            className="order-last order-lg-first"
          >
            <HomeSlider />
          </Col>
          <Col lg={3} xl={4} xxl={4} className="order-first order-lg-last">
            <HomeBanner />
          </Col>
        </Row>
        <Row className="g-0 align-items-stretch">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="d-flex">
            <ImageSection
              src="/images/app_phone_mockup.png"
              alt="App Phone mockup"
              title="App Phone mockup"
            />
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
