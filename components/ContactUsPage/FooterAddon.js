import React from "react";
import {
  Col,
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import ls from "@/styles/ContactUsPage/FooterAddon.module.css";

const FooterAddon = () => {
  return (
    <Container fluid className={`${ls.footer_addon}`}>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="py-4">
          <div
            className={`${ls.section} text-center d-flex flex-column align-content-center justify-content-center`}
          >
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterAddon;
