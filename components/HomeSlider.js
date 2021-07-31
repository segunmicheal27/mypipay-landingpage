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
      <Carousel indicators={true} controls={false} interval={3000}>
        <Carousel.Item className={`${ls.slide_item} p-3 text-center mt-5`}>
          <h1 className="text-center mx-auto mb-0">
            JOIN <span className={ls.header_highlighter}>Pi</span>PAY TODAY
          </h1>
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

          <h5>COMING SOON!!!</h5>
          <div className="mx-auto">
            <div className="d-flex justify-content-center mx-auto">
              <div>
                <Image
                  src="/applestore_download_button.png"
                  className="px-1"
                  height={40}
                  width={150}
                  alt="Download From Apple Store button"
                  title="Download from Apple Store"
                />
              </div>
              <div>
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
          </div>
        </Carousel.Item>
        <Carousel.Item className={`${ls.slide_item} p-3 text-center mt-5`}>
          <h1 className="text-center mx-auto mb-0">
            CREATE A <span className={ls.header_highlighter}>Pi</span>PAY
            ACCOUNT IN FEW STEPS
          </h1>
          <p className="text-center mx-auto mb-4">
            Open an account with us to start enjoying transaction without
            limitation, your account opening is just a few steps away.
          </p>
        </Carousel.Item>
        <Carousel.Item className={`${ls.slide_item} p-3 text-center mt-5`}>
          <h1 className="text-center mx-auto mb-0">
            PAY BILL WITH <span className={ls.header_highlighter}>Pi</span>PAY
          </h1>
          <p className="text-center mx-auto mb-4">
            Pay bills with pipay with just single click, pipay make transaction
            simple, you can make your transaction with your local currencies or
            cryptocurrencies.
          </p>
        </Carousel.Item>
        <Carousel.Item className={`${ls.slide_item} p-3 text-center mt-5`}>
          <h1 className="text-center mx-auto mb-0">
            EARN INTEREST WITH <span className={ls.header_highlighter}>Pi</span>
            PAY
          </h1>
          <p className="text-center mx-auto mb-4">
            Earn interest on major crypto currency you entrust us.
          </p>
        </Carousel.Item>
        <Carousel.Item className={`${ls.slide_item} p-3 text-center mt-5`}>
          <h1 className="text-center mx-auto mb-0">
            EARN CREDIT WITH <span className={ls.header_highlighter}>Pi</span>
            PAY
          </h1>
          <p className="text-center mx-auto mb-4">
            Earn credit on every transaction you made especial on pi currency.
          </p>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeSlider;
