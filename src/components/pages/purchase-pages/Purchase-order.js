import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import Today from "@material-ui/icons/Today";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import Datetime from "react-datetime";
import GridContainer from "components/Grid/GridContainer.js";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CustomInput from "components/CustomInput/CustomInput.js";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

import styles from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";

//const useStyles = makeStyles(styles);
const useStyles = makeStyles(styles);

function Purchase_order() {
  const classes = useStyles();
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const handleSimple = (event) => {
    setSimpleSelect(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h4 class="jss1400">PURCHASE ORDER - (105 )</h4>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.cardContentRight}>
            <Button
              style={{ backgroundColor: "#9c27b0" }}
              variant="contained"
              className={classes.button}
              simple
              color="primary"
              className={classes.marginRight}
            >
              Go
            </Button>

            <Button
              variant="contained"
              color="light"
              simple
              className={classes.marginRight}
            >
              PO Against INDENT
            </Button>

            <Button
              variant="contained"
              color="light"
              simple
              className={classes.marginRight}
            >
              All Pending Orders
            </Button>

            <Button
              variant="contained"
              color="primary"
              simple
              className={classes.marginRight}
            >
              New Entry
            </Button>
          </div>
        </Grid>
      </Grid>

      <GridContainer>
        <GridItem xs={12} sm={3} md={3}>
          <Card>
            <CardBody>
              {/* <InputLabel className={classes.label}>Fr Date</InputLabel>
              <br /> */}
              <InputLabel className={classes.label}>Fr Date</InputLabel>
              <FormControl fullWidth>
                <Datetime />
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={3} md={3}>
          <Card>
            <CardBody>
              {/* <InputLabel className={classes.label}>To Date</InputLabel>
              <br /> */}
               <InputLabel className={classes.label}>To Date</InputLabel>
              <FormControl fullWidth>
                <Datetime  />
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={3} md={3}>
          <Card>
            <CardBody>
              {/* <InputLabel className={classes.label}>Series</InputLabel>
              <br /> */}
              <InputLabel className={classes.label}>Series</InputLabel>
              <FormControl fullWidth>
                <Select
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  onChange={handleSimple}
                >
                  {/* <MenuItem
                            
                            classes={{
                              root: classes.selectMenuItem
                              
                            }}
                            value=""
                          >
                            Please Select
                          </MenuItem> */}
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="2"
                  >
                    PO
                  </MenuItem>
                </Select>
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={3} md={3}>
          <Card>
            <CardBody>
              {/* <InputLabel className={classes.label}>Party</InputLabel>
              <br /> */}
              <InputLabel className={classes.label}>Party</InputLabel>
              <FormControl fullWidth>
                <TextField required id="standard-required" defaultValue="" />
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default Purchase_order;
