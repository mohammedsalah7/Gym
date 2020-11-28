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
    <Container>
      <Left>
        {" "}
        <ArticleLeft>
          {" "}
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="600px"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen
          ></iframe>
        </ArticleLeft>{" "}
      </Left>
      <Right>
        {" "}
        <ArticleRight>
          <Form id="contact" action="" method="post">
            {/* <fieldset> */}
            <InputName
              name="name"
              type="text"
              id="name"
              placeholder="Your Name*"
              required=""
            />
            {/* </fieldset> */}
            {/* <fieldset> */}
            <InputEmail
              name="email"
              type="text"
              id="email"
              pattern="[^ @]*@[^ @]*"
              placeholder="Your Email*"
              required=""
            />
            {/* </fieldset> */}
            {/* <fieldset> */}
            <Input
              name="subject"
              type="text"
              id="subject"
              placeholder="Subject"
            />
            {/* </fieldset> */}
            {/* <fieldset> */}
            <TextArea
              name="message"
              rows="6"
              id="message"
              placeholder="Message"
              required=""
            ></TextArea>
            {/* </fieldset> */}
            {/* <fieldset> */}
            <Btn type="submit" id="form-submit" class="main-button">
              Send Message
            </Btn>
            {/* </fieldset> */}
          </Form>
        </ArticleRight>
      </Right>
      <Footer class="col-lg-12">
        <FooterHeader>
          Copyright &copy; 2020 Training Studio - Designed by{" "}
          <Link
            rel="nofollow"
            href="https://templatemo.com"
            class="tm-text-link"
            target="_parent"
          >
            TemplateMo
          </Link>
        </FooterHeader>
      </Footer>
    </Container>
  );
}
