import React from "react";
// import "./style.css";
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
  // List,
  Items,
  Info,
  Box,
  // ImageLink,
  Link,
  // Section,
  // Artical,
  H4,
  Span2,
  // Info,
  // Btn,
  // ImgTab,
  // LinkTap,
  // TopSection,
} from "./style";
export default function Export() {
  return (
    <>
      {/* <section class="section" id="trainers"> */}
      {/* <div class="container"> */}
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

      <Container class="row">
        <Box>
          <Section class="trainer-item">
            {/* <div class="image-thumb"> */}
            {/* </div> */}
            <Artical class="down-content">
              <Image src={first} alt="" />
              <Span2>Strength Trainer</Span2>
              <H4>Bret D. Bowers</H4>
              <Info>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </Info>
              <Items class="social-icons">
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
          <Section class="trainer-item">
            {/* <div class="image-thumb"> */}
            {/* </div> */}
            <Artical class="down-content">
              <Image src={second} alt="" />
              <Span2>Muscle Trainer</Span2>
              <H4>Hector T. Daigl</H4>
              <Info>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </Info>
              <Items class="social-icons">
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
          <Section class="trainer-item">
            {/* <div class="image-thumb"> */}
            {/* </div> */}
            <Artical class="down-content">
              <Image src={thered} alt="" />
              <Span2>Power Trainer</Span2>
              <H4>Paul D. Newman</H4>
              <Info>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </Info>
              <Items class="social-icons">
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

          {/* <Section class="trainer-item">
              <div class="image-thumb">
                <img src={second} alt="" />
              </div>
              <div class="down-content">
                <span>Muscle Trainer</span>
                <h4>Hector T. Daigl</h4>
                <p>
                  Bitters cliche tattooed 8-bit distillery mustache. Keytar
                  succulents gluten-free vegan church-key pour-over seitan
                  flannel.
                </p>
                <ul class="social-icons">
                  <li>
                    <a href="#1">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#1">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#1">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#1">
                      <i class="fa fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Section> */}

          {/* <Section class="trainer-item">
            <div class="image-thumb">
              <img src={thered} alt="" />
            </div>
            <div class="down-content">
              <span>Power Trainer</span>
              <h4>Paul D. Newman</h4>
              <p>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </p>
              <ul class="social-icons">
                <li>
                  <a href="#1">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#1">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#1">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#1">
                    <i class="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Section> */}
          {/* </div> */}
          {/* </div> */}
          {/* </section> */}
        </Box>
      </Container>
    </>
  );
}
