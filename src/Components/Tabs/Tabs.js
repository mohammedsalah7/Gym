import { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import tabs from "../../images/tabs-first-icon.png";
import waves from "../../images/line-dec.png";
import icon1 from "../../images/training-image-01.jpg";
import icon2 from "../../images/training-image-02.jpg";
import icon3 from "../../images/training-image-03.jpg";
import icon4 from "../../images/training-image-04.jpg";
import {
  Heading,
  H2,
  Parghraph,
  Image,
  Span,
  ImageLink,
  Link,
  Section,
  Artical,
  H4,
  Info,
  ImgTab,
  LinkTap,
  Btn,
} from "./style";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: 604,
    position: "relative",
    top: "239px",
  },
  tabs: {
    position: "absolute",
    top: "126px",
    bottom: "100px",
    width: "600px",
    height: "700px",
  },

  tab: {
    position: "relative",
    top: "20px",
    marginLeft: "80px",
    color: "#212529",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px ",
    marginBottom: "30px",
    textTransform: "capitalize",
    display: "inline-block",
  },
}));
function Gallary() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Heading>
        <H2>
          Our <Span>Classes</Span>
        </H2>
        <Image src={waves} alt="waves" />
        <Parghraph>
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </Parghraph>
      </Heading>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="black"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab
          style={{ minHeight: 95 }}
          disableTouchRipple={true}
          color="primary"
          label={
            <>
              <ImageLink src={tabs} />
              <Link>First Training Class</Link>
            </>
          }
          className={classes.tab}
        />
        <Tab
          style={{ minHeight: 95 }}
          disableTouchRipple={true}
          selected={true}
          label={
            <>
              <ImageLink src={tabs} />
              <Link>Second Training Class</Link>
            </>
          }
          className={classes.tab}
        />
        <Tab
          style={{ minHeight: 95 }}
          disableTouchRipple={true}
          label={
            <>
              <ImageLink src={tabs} />
              <Link>Third Training Class</Link>
            </>
          }
          className={classes.tab}
        />
        <Tab
          style={{ minHeight: 95 }}
          disableTouchRipple={true}
          label={
            <>
              <ImageLink src={tabs} />
              <Link>Fourth Training Class</Link>
            </>
          }
          className={classes.tab}
        />
      </Tabs>
      <TabPanel
        className={classes.tabPanel}
        value={value}
        index={0}
        variant="body1"
      >
        <Section>
          <Artical>
            <ImgTab src={icon1} alt="First Class" />
            <H4>First Training Class</H4>
            <Info>
              Phasellus convallis mauris sed elementum vulputate. Donec posuere
              leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed
              vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia
              gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
              accumsan diam.
            </Info>
            <LinkTap href="#1">View Schedule</LinkTap>
          </Artical>
        </Section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Section>
          <Artical>
            <ImgTab src={icon2} alt="Second Class" />
            <H4>Second Training Class</H4>
            <Info>
              Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac
              pulvinar quam tortor a velit. Praesent ultrices erat ante, in
              ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper
              at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </Info>
            <LinkTap href="#2">View Schedule</LinkTap>
          </Artical>
        </Section>{" "}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Section>
          <Artical>
            <ImgTab src={icon3} alt="Third Class" />
            <H4>Third Training Class</H4>
            <Info>
              Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id
              auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus
              porta, nisi tortor vulputate sapien, id scelerisque felis magna id
              felis. Proin neque metus, pellentesque pharetra semper vel,
              accumsan a neque.
            </Info>
            <LinkTap href="#3">View Schedule</LinkTap>
          </Artical>
        </Section>{" "}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Section>
          <Artical>
            <ImgTab src={icon4} alt="Fourth Class" />
            <H4>Fourth Training Class</H4>
            <Info>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aenean ultrices elementum odio
              ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum
              commodo et.
            </Info>
            <LinkTap href="#4">View Schedule</LinkTap>
          </Artical>
        </Section>{" "}
      </TabPanel>
      <Btn href="#">View Schedule</Btn>
    </div>
  );
}

export default Gallary;
