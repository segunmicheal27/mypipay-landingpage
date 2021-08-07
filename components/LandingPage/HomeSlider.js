import ls from "@/styles/LandingPage/HomeSlider.module.css";
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

const HomeSlider = () => {
  return (
    <Container fluid>
      <Carousel indicators={true} controls={false} interval={3000}>
        <Carousel.Item className={`${ls.slide_item} p-3 text-center mt-5`}>
          <h1 className="text-center mx-auto mb-0">
            CREATE A <span className={ls.header_highlighter}>Pi</span>PAY
            ACCOUNT IN FEW STEPS
          </h1>
          <p className="text-center mx-auto mb-4">
            Open an account with us to start enjoying transaction without
            limitation, your account opening is just a few steps away.
          </p>
          <Button className={`${ls.subscribe_button} px-3 rounded-pill`}>COMING SOON</Button>
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
            Earn credit on every transaction you make especially on pi currency.
          </p>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeSlider;
