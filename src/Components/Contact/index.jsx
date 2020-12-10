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
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function Contact() {
  return (
    <Container id="contact">
      <Left>
        {" "}
        <ArticleLeft>
          <MapContainer
            center={[31.535243, 34.4752707, 15]}
            zoom={13}
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[31.535243, 34.4752707, 15]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
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
