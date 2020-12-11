import { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import icon from "../../images/schedule-bg.jpg";
import { Table, TBody, Tr, Td } from "./styleTable";

import line from "../../images/line-dec.png";
import * as S from "./style";

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
          <Typography component={"span"}>{children}</Typography>
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

const useStyles = makeStyles((e) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "unset",
    backgroundImage: `url(${icon})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginTop: "140px",
    color: "red",
    width: "100%",
    height: "1000px",
    bottom: "10px",
  },
  app: {
    backgroundColor: "unset",
    boxShadow: "none",
    display: "flex",
    flexWrap: "wrap",
    padding: "0px",
    width: "700px",
    top: "320px",
    left: "410px",
    zIndex: "1",
  },
  TabPanel: {
    marginTop: "320px",
    marginLeft: "300px",
  },
  tab: {
    left: "30px",
    color: "white",
    textTransform: "none",
    padding: "0px",
    margin: "10px",
    width: "10px",
    height: "10px",
    fontSize: "15px",
    transition: "none",
    backgroundColor: "unset",
  },

  tab2: {
    position: "relative",
    color: "white",
    textTransform: "none",
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
    padding: "0px",
    margin: "10px",
    width: "100px",
    height: "10px",
    fontSize: "15px",
  },
}));

export default function Schedules() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <S.Container>
          <S.H2>
            Classes <S.Span>Schedule</S.Span>
          </S.H2>
          <S.Image src={line} alt="line" />
          <S.Parghraph>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </S.Parghraph>
        </S.Container>

        <AppBar className={classes.app} position="relative">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            indicatorColor="secondary"
            textColor="primary"
          >
            <Tab
              style={{ minHeight: 30, minWidth: 100 }}
              disableTouchRipple={true}
              className={classes.tab}
              label={"Monday  /"}
            />
            <Tab
              style={{ minHeight: 30, minWidth: 100 }}
              disableTouchRipple={true}
              className={classes.tab2}
              label={" Tuesday /"}
            />
            <Tab
              style={{ minHeight: 30, minWidth: 120 }}
              disableTouchRipple={true}
              className={classes.tab3}
              label={" Wednesday   /"}
            />
            <Tab
              style={{ minHeight: 30, minWidth: 100 }}
              disableTouchRipple={true}
              className={classes.tab4}
              label=" Thursday   /"
            />
            <Tab
              style={{ minHeight: 30, minWidth: 100 }}
              disableTouchRipple={true}
              className={classes.tab5}
              label={" Friday"}
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
