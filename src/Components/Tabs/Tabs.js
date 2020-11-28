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
import { Button } from "@material-ui/core";
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
            <ImgTab src={icon2} alt="First Class" />
            <H4>First Training Class</H4>
            <Info>
              Phasellus convallis mauris sed elementum vulputate. Donec posuere
              leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed
              vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia
              gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
              accumsan diam.
            </Info>

            <Button variant="contained" color="primary">
              View Schedule
            </Button>
          </Artical>
        </Section>{" "}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Section>
          <Artical>
            <ImgTab src={icon3} alt="First Class" />
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
        </Section>{" "}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Section>
          <Artical id="tabs-1">
            <ImgTab src={icon4} alt="First Class" />
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
        </Section>{" "}
      </TabPanel>
      <Btn href="#1">View Schedule</Btn>
    </div>
  );
}

export default Gallary;
