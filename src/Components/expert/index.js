import React from "react";
import waves from "../../images/line-dec.png";
import first from "../../images/first-trainer.jpg";
import second from "../../images/second-trainer.jpg";
import thered from "../../images/third-trainer.jpg";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Heading,
  H2,
  Parghraph,
  Image,
  Span,
  Section,
  List,
  Artical,
  Items,
  Info,
  Box,
  Link,
  H4,
  Span2,
} from "./style";
export default function Export() {
  return (
    <>
      <Heading>
        <H2>
          Expert <Span>Trainers</Span>
        </H2>
        <Image src={waves} alt="waves" />
        <Parghraph>
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </Parghraph>
      </Heading>

      <Container>
        <Box>
          <Section>
            <Artical>
              <Image src={first} alt="" />
              <Span2>Strength Trainer</Span2>
              <H4>Bret D. Bowers</H4>
              <Info>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </Info>
              <Items>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </List>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </List>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </List>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faBehance} />
                  </Link>
                </List>
              </Items>
            </Artical>
          </Section>
          <Section>
            <Artical>
              <Image src={second} alt="" />
              <Span2>Muscle Trainer</Span2>
              <H4>Hector T. Daigl</H4>
              <Info>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </Info>
              <Items>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </List>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </List>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </List>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faBehance} />
                  </Link>
                </List>
              </Items>
            </Artical>
          </Section>
          <Section>
            <Artical>
              <Image src={thered} alt="" />
              <Span2>Power Trainer</Span2>
              <H4>Paul D. Newman</H4>
              <Info>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </Info>
              <Items>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </List>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </List>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </List>
                <List>
                  <Link href="#1">
                    <FontAwesomeIcon icon={faBehance} />
                  </Link>
                </List>
              </Items>
            </Artical>
          </Section>
        </Box>
      </Container>
    </>
  );
}
