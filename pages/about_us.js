import HomeSectionRight from "@/components/AboutUsPage/HomeSectionRight";
import TeamMemberImage from "@/components/AboutUsPage/TeamMemberImage";
import TitleAndSub from "@/components/AboutUsPage/TitleAndSub";
import HomeFooter from "@/components/Reusable/HomeFooter";
import ImageSection from "@/components/Reusable/ImageSection";
import TopNavBarAddon from "@/components/Reusable/TopNavBarAddon";
import TopNavBarMain from "@/components/Reusable/TopNavBarMain";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";

function about_us() {
  const levelOneMembers = [
    "Becky Cruz, NA",
    "Jane Doe, NA",
    "John Doe, NA",
    "James Doe, NA",
    "Janet Doe, NA",
    "Jack Doe, NA",
  ];
  const levelTwoMembers = [
    "Jake Doe, NA",
    "Jerry Doe, NA",
    "Jaime Doe, NA",
    "Jackson Doe, NA",
    "Becky Cruz, NA",
    "Jane Doe, NA",
    "John Doe, NA",
    "James Doe, NA",
    "Janet Doe, NA",
    "Jack Doe, NA",
  ];
  return (
    <>
      <Head>
        <title>My PiPay | About Us</title>
        <meta
          name="description"
          content="A Brief Summary About making Borderless Transactions"
        />
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
      <Container className="p-0 mb-2">
        <div className="d-flex flex-column flex-lg-row align-content-center justify-content-evenly">
          <div className="d-flex align-self-center justify-content-center">
            <ImageSection
              src="/images/pipay_icon_lg.png"
              alt="My Pipay Icon"
              title="My Pipay Icon"
            />
          </div>
          <div className="ml-auto">
            <HomeSectionRight />
          </div>
        </div>
        <Row className="g-0 align-contnt-center justify-content-center">
          <Col>
            <TitleAndSub />
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12} lg={10} xl={9} xxl={8}>
            <div className="g-3 g-lg-5 d-flex flex-wrap justify-content-evenly justify-content-lg-center">
              {levelOneMembers.map((member, i) => (
                <div className="mx-1 my-2 m-lg-4" key={i}>
                  <TeamMemberImage fullName={member} level={1} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mb-5">
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="g-3 g-lg-5 d-flex flex-wrap justify-content-evenly justify-content-lg-center">
              {levelTwoMembers.map((member, i) => (
                <div className="mx-1 my-2 m-lg-4" key={i}>
                  <TeamMemberImage fullName={member} level={2} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <HomeFooter />
    </>
  );
}

export default about_us;
