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

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: "#004C9B",

    flexGrow: 1,
    // backgroundColor: "red",
    display: "flex",
    height: 604,
    position: "relative",
    top: "350px",
    // border: "1px solid blue",
    // overflow: "hidden",

    // margin: "50px",
    // padding: "0px important",
  },
  tabs: {
    position: "absolute",
    top: "-100px",
    bottom: "100px",
    // border: "1px solid red",
    width: "1000px",
    height: "600px",
    // width: "300px",
    // "&$selected": {
    // backgroundColor: "#004C9B",
    //   color: "white",
    // },
  },
  tabPanel: {
    // border: "1px solid red",
    // backgroundColor: "red",
    // marginLeft: "30px",
    position: "absolute",
    marginTop: "30px",
    marginLeft: "40px",
    // backgroundColor: "#004C9B",

    // color: "black",
    // margin: "150px",
    // border: "10px solid blue",
  },
  tab: {
    position: "relative",
    top: "20px",
    marginLeft: "150px",
    overlow: "auto",
    // padding: "0px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px ",
    marginBottom: "30px",
    // padding: " 20px 30px",
    textTransform: "capitalize",
    // width: 300px;
    display: "inline-block",
    // background-color: #fff;
    // box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    // border-radius: 5px;
    // font-size: 19px;
    // color: #232d39;
    // letter-spacing: 0.5px;
    // font-weight: 600;
    // transition: all 0.3s;
    // text-decoration: none;
    // border: "1px solid red",
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
        // variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="black"
        textColor="primary"
      >
        <Tab
          color="primary"
          label={
            <>
              {/* <Icon src={tabs} /> */}
              <ImageLink src={tabs} />
              <Link>First Training Class</Link>
            </>
          }
          className={classes.tab}
        />
        <Tab
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
          label={
            <>
              <ImageLink src={tabs} />
              <Link>Third Training Class</Link>
            </>
          }
          className={classes.tab}
        />
        <Tab
          label={
            <>
              <ImageLink src={tabs} />
              <Link>Fourth Training Class</Link>
            </>
          }
          className={classes.tab}
        />
      </Tabs>
      {/* <LinkTap href="#1">View Schedule</LinkTap> */}
      <TabPanel className={classes.tabPanel.root} value={value} index={0}>
        <Section class="tabs-content">
          <Artical id="tabs-1">
            <ImgTab src={icon1} alt="First Class" />
            <H4>First Training Class</H4>
            <Info>
              Phasellus convallis mauris sed elementum vulputate. Donec posuere
              leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed
              vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia
              gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
              accumsan diam.
            </Info>
            {/* <div class="main-button"> */}
            <LinkTap href="#1">View Schedule</LinkTap>
            {/* </div> */}
          </Artical>
        </Section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Section class="tabs-content">
          <Artical id="tabs-1">
            <ImgTab src={icon2} alt="First Class" />
            <H4>First Training Class</H4>
            <Info>
              Phasellus convallis mauris sed elementum vulputate. Donec posuere
              leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed
              vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia
              gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
              accumsan diam.
            </Info>
            {/* <div class="main-button"> */}
            {/* <a href="#1">View Schedule</a> */}
            <Button variant="contained" color="primary">
              View Schedule
            </Button>
            {/* </div> */}
          </Artical>
        </Section>{" "}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Section class="tabs-content">
          <Artical id="tabs-1">
            <ImgTab src={icon3} alt="First Class" />
            <H4>First Training Class</H4>
            <Info>
              Phasellus convallis mauris sed elementum vulputate. Donec posuere
              leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed
              vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia
              gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
              accumsan diam.
            </Info>
            {/* <div class="main-button"> */}
            <LinkTap href="#1">View Schedule</LinkTap>
            {/* </div> */}
          </Artical>
        </Section>{" "}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Section class="tabs-content">
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
            {/* <div class="main-button"> */}
            <LinkTap href="#1">View Schedule</LinkTap>
            {/* </div> */}
          </Artical>
        </Section>{" "}
      </TabPanel>
    </div>
  );
}

export default Gallary;
