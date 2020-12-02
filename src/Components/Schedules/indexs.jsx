import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import icon from "../../images/schedule-bg.jpg";
import { Table, TBody, Tr, Td } from "../Tabel/styleTable";

import icon1 from "../../images/line-dec.png";
import { Container, H2, Parghraph, Image, Span } from "./style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((e) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "unset",
    backgroundImage: `url(${icon})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    // opacity: "1",
    marginTop: "140px",
    // marginBottom: "350px",
    color: "red",
    width: "100%",
    height: "1000px",
    // position: "re",
    // top: "3000px",
    bottom: "10px",
    // fontFamily: "'Poppins', sans-serif",
    // border: "10px solid blue",
  },
  app: {
    backgroundColor: "unset",
    boxShadow: "none",
    display: "flex",
    flexWrap: "wrap",
    // border: "0px",
    padding: "0px",
    // border: "1px solid red",
    width: "700px",
    // position: "absolute",
    top: "290px",
    left: "390px",

    // height: "50px",
    // overflow: "visible ",
  },
  TabPanel: {
    // border: "1px solid blue",
    // position: "absolute",
    marginTop: "280px",
    marginLeft: "320px",
    // left: "280px",
    // top: "390px",
    // zIndex: "-999",
  },
  tab: {
    // position: "relative",
    left: "30px",
    color: "white",
    textTransform: "none",
    // border: "1px solid red",
    padding: "0px",
    margin: "10px",
    width: "10px",
    height: "10px",
    fontSize: "15px",
    transition: "none",
    backgroundColor: "unset",

    // "&:hover": {
    // color: "blue",
    // transition: "none",
    // backgroundColor: "unset",
    // },
    // "&$tabSelected": {
    // backgroundColor: "unset",
    // },
    // "&:focus": {
    // color: "red",
    // backgroundColor: "unset",
    // width: "10px",
    // },
  },
  // tabSelected: {},

  tab2: {
    position: "relative",
    // left: "55px",
    color: "white",
    textTransform: "none",
    // border: "1px solid red",
    padding: "0px",
    margin: "10px",
    width: "100px",
    height: "10px",
    fontSize: "15px",
  },
  tab3: {
    position: "relative",
    right: "25px",
    color: "white",
    // border: "1px solid red",
    padding: "0px",
    margin: "10px",
    width: "100px",
    height: "10px",
    textTransform: "none",
    fontSize: "15px",
  },
  tab4: {
    position: "relative",
    right: "50px",
    color: "white",
    textTransform: "none",
    // border: "1px solid red",
    padding: "0px",
    margin: "10px",
    width: "100px",
    height: "10px",
    fontSize: "15px",
  },
  tab5: {
    position: "relative",
    right: "90px",
    color: "white",
    textTransform: "none",
    // border: "1px solid red",
    padding: "0px",
    margin: "10px",
    width: "100px",
    height: "10px",
    fontSize: "15px",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Container>
          <H2>
            Classes <Span>Schedule</Span>
          </H2>
          <Image src={icon1} alt="" />
          <Parghraph>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </Parghraph>
        </Container>

        <AppBar className={classes.app} position="relative">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            indicatorColor="black"
            // className={classes.tab}
            textColor="primary"
          >
            <Tab
              style={{ minHeight: 30, minWidth: 100 }}
              disableTouchRipple={true}
              // wrapped={true}
              className={classes.tab}
              label={"Monday  /"}
              {...a11yProps(0)}
            />
            <Tab
              style={{ minHeight: 30, minWidth: 100 }}
              disableTouchRipple={true}
              className={classes.tab2}
              label={" Tuesday /"}
              {...a11yProps(1)}
            />
            <Tab
              style={{ minHeight: 30, minWidth: 120 }}
              disableTouchRipple={true}
              className={classes.tab3}
              label={" Wednesday   /"}
              {...a11yProps(2)}
            />
            <Tab
              style={{ minHeight: 30, minWidth: 100 }}
              disableTouchRipple={true}
              className={classes.tab4}
              label=" Thursday   /"
              {...a11yProps(2)}
            />
            <Tab
              style={{ minHeight: 30, minWidth: 100 }}
              disableTouchRipple={true}
              className={classes.tab5}
              label={" Friday"}
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <TabPanel className={classes.TabPanel} value={value} index={0}>
          <Table>
            <TBody>
              <Tr>
                <Td>Fitness Class</Td>
                <Td>10:00AM - 11:30AM</Td>
                <Td></Td>
                <Td>William G. Stewart</Td>
              </Tr>
              <Tr>
                <Td>Muscle Training</Td>
                <Td></Td>
                <Td></Td>
                <Td>Paul D. Newman</Td>
              </Tr>
              <Tr>
                <Td>Body Building</Td>
                <Td></Td>
                <Td>2:00PM - 3:30PM</Td>

                <Td>Boyd C. Harris</Td>
              </Tr>
              <Tr>
                <Td>Yoga Training Class</Td>
                <Td></Td>
                <Td></Td>
                <Td>Hector T. Daigle</Td>
              </Tr>
              <Tr>
                <Td>Advanced Training</Td>
                <Td></Td>
                <Td></Td>
                <Td>Bret D. Bowers</Td>
              </Tr>
            </TBody>
          </Table>{" "}
        </TabPanel>
        <TabPanel className={classes.TabPanel} value={value} index={1}>
          <Table>
            <TBody>
              <Tr>
                <Td>Fitness Class</Td>
                <Td></Td>
                <Td>2:00PM - 3:30PM</Td>
                <Td>William G. Stewart</Td>
              </Tr>
              <Tr>
                <Td>Muscle Training</Td>
                <Td></Td>
                <Td></Td>
                <Td>Paul D. Newman</Td>
              </Tr>
              <Tr>
                <Td>Body Building</Td>
                <Td>10:00AM - 11:30AM</Td>
                <Td></Td>
                <Td>Boyd C. Harris</Td>
              </Tr>
              <Tr>
                <Td>Yoga Training Class</Td>
                <Td></Td>
                <Td></Td>
                <Td>Hector T. Daigle</Td>
              </Tr>
              <Tr>
                <Td>Advanced Training</Td>
                <Td></Td>
                <Td></Td>
                <Td>Bret D. Bowers</Td>
              </Tr>
            </TBody>
          </Table>{" "}
        </TabPanel>
        <TabPanel className={classes.TabPanel} value={value} index={2}>
          <Table>
            <TBody>
              <Tr>
                <Td>Fitness Class</Td>
                <Td></Td>
                <Td></Td>
                <Td>William G. Stewart</Td>
              </Tr>
              <Tr>
                <Td>Muscle Training</Td>
                <Td></Td>
                <Td></Td>
                <Td>Paul D. Newman</Td>
              </Tr>
              <Tr>
                <Td>Body Building</Td>
                <Td></Td>
                <Td></Td>
                <Td>Boyd C. Harris</Td>
              </Tr>
              <Tr>
                <Td>Yoga Training Class</Td>
                <Td>10:00AM - 11:30AM</Td>
                <Td></Td>
                <Td>Hector T. Daigle</Td>
              </Tr>
              <Tr>
                <Td>Advanced Training</Td>
                <Td></Td>
                <Td>2:00PM - 3:30PM</Td>
                <Td>Bret D. Bowers</Td>
              </Tr>
            </TBody>
          </Table>{" "}
        </TabPanel>
        <TabPanel className={classes.TabPanel} value={value} index={3}>
          <Table>
            <TBody>
              <Tr>
                <Td>Fitness Class</Td>
                <Td></Td>
                <Td></Td>
                <Td>William G. Stewart</Td>
              </Tr>
              <Tr>
                <Td>Muscle Training</Td>
                <Td></Td>
                <Td>2:00PM - 3:30PM</Td>
                <Td>Paul D. Newman</Td>
              </Tr>
              <Tr>
                <Td>Body Building</Td>
                <Td></Td>
                <Td></Td>
                <Td>Boyd C. Harris</Td>
              </Tr>
              <Tr>
                <Td>Yoga Training Class</Td>
                <Td></Td>
                <Td></Td>
                <Td>Hector T. Daigle</Td>
              </Tr>
              <Tr>
                <Td>Advanced Training</Td>
                <Td>10:00AM - 11:30AM</Td>
                <Td></Td>
                <Td>Bret D. Bowers</Td>
              </Tr>
            </TBody>
          </Table>{" "}
        </TabPanel>
        <TabPanel className={classes.TabPanel} value={value} index={4}>
          <Table>
            <TBody>
              <Tr>
                <Td>Fitness Class</Td>
                <Td></Td>
                <Td></Td>
                <Td>William G. Stewart</Td>
              </Tr>
              <Tr>
                <Td>Muscle Training</Td>
                <Td>10:00AM - 11:30AM</Td>
                <Td></Td>
                <Td>Paul D. Newman</Td>
              </Tr>
              <Tr>
                <Td>Body Building</Td>
                <Td></Td>
                <Td></Td>
                <Td>Boyd C. Harris</Td>
              </Tr>
              <Tr>
                <Td>Yoga Training Class</Td>
                <Td></Td>
                <Td>2:00PM - 3:30PM</Td>
                <Td>Hector T. Daigle</Td>
              </Tr>
              <Tr>
                <Td>Advanced Training</Td>
                <Td></Td>
                <Td></Td>
                <Td>Bret D. Bowers</Td>
              </Tr>
            </TBody>
          </Table>{" "}
        </TabPanel>
      </Paper>
    </div>
  );
}
