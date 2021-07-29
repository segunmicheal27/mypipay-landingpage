import Image from "next/image";
import React from "react";
import {
  Button,
  Carousel,
  Container,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import ls from "../styles/HomeSlider.module.css";

const HomeSlider = () => {
  return (
    <Container fluid>
      <Carousel indicators={true}>
        <Carousel.Item className={`${ls.slide_item} p-3 text-center mt-5`}>
          <h1 className="text-center mx-auto mb-0">
            JOIN <span className={ls.header_highlighter}>Pi</span>PAY TODAY
          </h1>
          <p className="text-center mx-auto mb-4">
            Join our community and receive updates on latest developments
          </p>
          <p className="text-center mx-auto mb-4">
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
          </p>

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
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeSlider;
