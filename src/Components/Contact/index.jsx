import React from "react";
import {
  Container,
  Left,
  Right,
  Footer,
  ArticleLeft,
  ArticleRight,
  Form,
  Btn,
  TextArea,
  Input,
  InputName,
  InputEmail,
  FooterHeader,
  Link,
} from "./style";
export default function Contact() {
  return (
    <Container id="contact">
      <Left>
        {" "}
        <ArticleLeft>
          {" "}
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="600px"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </ArticleLeft>{" "}
      </Left>
      <Right>
        {" "}
        <ArticleRight>
          <Form method="post">
            <InputName
              name="name"
              type="text"
              id="name"
              placeholder="Your Name*"
              required=""
            />

            <InputEmail
              name="email"
              type="text"
              id="email"
              pattern="[^ @]*@[^ @]*"
              placeholder="Your Email*"
              required=""
            />

            <Input
              name="subject"
              type="text"
              id="subject"
              placeholder="Subject"
            />

            <TextArea
              name="message"
              rows="6"
              id="message"
              placeholder="Message"
              required=""
            ></TextArea>
            <Btn type="submit">Send Message</Btn>
          </Form>
        </ArticleRight>
      </Right>
      <Footer>
        <FooterHeader>
          Copyright &copy; 2020 Training Studio - Designed by{" "}
          <Link
            rel="nofollow"
            href="https://www.facebook.com/mohamadmsalah7/"
            target="_blank"
          >
            Mohammed Salah
          </Link>
        </FooterHeader>
      </Footer>
    </Container>
  );
}
