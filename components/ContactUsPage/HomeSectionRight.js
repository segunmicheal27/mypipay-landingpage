import ls from "@/styles/ContactUsPage/HomeSectionRight.module.css";
import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

const HomeSectionRight = () => {
  return (
    <div className={`${ls.section} mb-5`}>
      <div>
        <Form>
          <Row className="mb-3">
            <Col>
              <FormControl
                type="text"
                placeholder="First Name"
                name="first_name"
                className={`${ls.custom_input}`}
              />
            </Col>
            <Col>
              <FormControl
                type="text"
                placeholder="Last Name"
                name="last_name"
                className={`${ls.custom_input}`}
              />
            </Col>
          </Row>
          <Row className="mb-3 gy-3">
            <Col xs={12}>
              <FormControl
                type="email"
                placeholder="Email Address"
                name="email"
                className={`${ls.custom_input}`}
              />
            </Col>
            <Col xs={12}>
              <FormControl
                as="textarea"
                rows={5}
                placeholder="Type your message here..."
                name="message"
                className={`${ls.custom_input}`}
              />
            </Col>
            <Col xs={12}>
              <Button type="submit" className={`${ls.send_message_btn} w-100`}>
                <FaPaperPlane /> Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default HomeSectionRight;
