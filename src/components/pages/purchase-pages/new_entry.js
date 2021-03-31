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

import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import DetailsIcon from "@material-ui/icons/Details";
import Table from "components/Table/Table.js";
import Check from "@material-ui/icons/Check";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Delete";

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
  const [checked, setChecked] = React.useState([]);

  const handleSimple = (event) => {
    setSimpleSelect(event.target.value);
  };

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

//   let state = [ "Andhra Pradesh",
//                 "Arunachal Pradesh",
//                 "Assam",
//                 "Bihar",
//                 "Chhattisgarh",
//                 "Goa",
//                 "Gujarat",
//                 "Haryana",
//                 "Himachal Pradesh",
//                 "Jammu and Kashmir",
//                 "Jharkhand",
//                 "Karnataka",
//                 "Kerala",
//                 "Madhya Pradesh",
//                 "Maharashtra",
//                 "Manipur",
//                 "Meghalaya",
//                 "Mizoram",
//                 "Nagaland",
//                 "Odisha",
//                 "Punjab",
//                 "Rajasthan",
//                 "Sikkim",
//                 "Tamil Nadu",
//                 "Telangana",
//                 "Tripura",
//                 "Uttarakhand",
//                 "Uttar Pradesh",
//                 "West Bengal",
//                 "Andaman and Nicobar Islands",
//                 "Chandigarh",
//                 "Dadra and Nagar Haveli",
//                 "Daman and Diu",
//                 "Delhi",
//                 "Lakshadweep",
//                 "Puducherry"]

  return (
    <div>
      <Grid container spacing={1}>
        <h4 class="jss1400" style={{ marginRight: "9px", marginTop: "5px" }}>
          CREATE PURCHASE ORDER - (105)
        </h4>

        <Button
          borderRadius="50%"
          style={{
            backgroundColor: "#9c27b0",
            height: "36px",
            maxWidth: "42px",
          }}
          variant="contained"
          round
          color="primary"
          className={classes.marginRight}
        >
          <span class="material-icons">description</span>
        </Button>
        <Button
          style={{ backgroundColor: "#9c27b0", height: "36px", width: "3px" }}
          variant="contained"
          className={classes.button}
          round
          color="primary"
          className={classes.marginRight}
        >
          <span class="material-icons">disabled_by_default</span>
        </Button>
        <Button
          style={{ backgroundColor: "#9c27b0", height: "36px", width: "3px" }}
          variant="contained"
          className={classes.button}
          round
          color="primary"
          className={classes.marginRight}
        >
          <span class="material-icons">print</span>
        </Button>
        <Button
          style={{ backgroundColor: "#9c27b0", height: "36px", width: "3px" }}
          variant="contained"
          className={classes.button}
          round
          color="primary"
          className={classes.marginRight}
        >
          <span class="material-icons">email</span>
        </Button>
        <Button
          style={{ backgroundColor: "#9c27b0", height: "36px", width: "3px" }}
          variant="contained"
          className={classes.button}
          round
          color="primary"
          className={classes.marginRight}
        >
          <span class="material-icons">sms</span>
        </Button>
        <Button
          style={{ backgroundColor: "#9c27b0", height: "36px", width: "3px" }}
          variant="contained"
          className={classes.button}
          round
          color="primary"
          className={classes.marginRight}
        >
          <span class="material-icons">check</span>
        </Button>

        <Button
          style={{ backgroundColor: "#9c27b0", height: "36px", width: "3px" }}
          variant="contained"
          className={classes.button}
          round
          color="primary"
          className={classes.marginRight}
        >
          <span class="material-icons">thumb_up</span>
        </Button>
      </Grid>

      <GridContainer>
        <GridItem xs={12} sm={2} md={2}>
          <Card>
            <CardBody>
              {/* <InputLabel className={classes.label}>Series</InputLabel>
              <br /> */}
              <FormControl fullWidth>
                <Select
                  
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
                      //selected: classes.selectMenuItemSelected,
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

        <GridItem xs={2} sm={2} md={2}>
          <Card>
            <CardBody>
              {/* <InputLabel className={classes.label}>Date</InputLabel>
              <br /> */}
              <FormControl fullWidth>
                <Datetime inputProps={{ placeholder: "Date" }} />
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={2} md={2}>
          <Card>
            <CardBody>
              {/* <InputLabel className={classes.label}>Party</InputLabel>
              <br /> */}
              <FormControl fullWidth>
                <TextField required id="standard-required" defaultValue="" placeholder="Party"/>
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={3} md={3}>
          <Card>
            <CardBody>
              {/* <InputLabel className={classes.label}>Short Name</InputLabel>
              <br /> */}
              <FormControl fullWidth>
                <TextField required id="standard-required" defaultValue="" placeholder="Short Name"/>
              </FormControl>
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="IS SHORT CLOSE "
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={2} md={2}>
            {/* <CustomInput
                labelText="Order Ref No"
                id="email_adress"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "email"
                }}
              /> */}
              <FormControl fullWidth>
                <TextField required id="standard-required" defaultValue="" placeholder="Order Ref No" />
              </FormControl>
          
        </GridItem>

        <GridItem xs={2} sm={2} md={2}>
           {/* <InputLabel className={classes.label}>Delivery Date</InputLabel>
              <br /> */}
              <FormControl fullWidth>
                <Datetime inputProps={{ placeholder: "Delivery Date" }} />
              </FormControl>
        </GridItem>

        <GridItem xs={12} sm={2} md={2}>
              <FormControl fullWidth>
                <TextField required id="standard-required" defaultValue="" placeholder="P.O Terms" />
              </FormControl>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title=""
            headerColor="primary"
            tabs={[
              {
                tabName: "Item Details",
                tabIcon: DetailsIcon,
                tabContent: <p>Herere11111111222</p>,
              },
              {
                tabName: "Dispatch Details",
                tabIcon: DetailsIcon,
                tabContent: (
                  <div>
                    <GridContainer>
                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Name
                            </InputLabel>
                            <br />
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
                                  Name
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Mode
                            </InputLabel>
                            <br />
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
                                  Road
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Truck No
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Truck Type
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              LR No
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Lr Date
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <Datetime
                                inputProps={{ placeholder: "Lr Date" }}
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Distance(Km)
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Driver Name
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Mobile No
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Remark
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={4} md={4}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                            Ship To Party Name
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Mobile No.
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={2} md={2}>
          <Card>
            <CardBody>
              <InputLabel className={classes.label}>State</InputLabel>
              <br />
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
        

                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                            GSTIN No.
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                            Freight Amt
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      
                      

                      <GridItem xs={12} sm={4} md={4}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                            Address
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                            City
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                            Pincode
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                    <GridItem xs={12} sm={2} md={2}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                            Email Id
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                    
                  </div>
                ),
              },
              {
                tabName: "General Details",
                tabIcon: DetailsIcon,
                tabContent: (
                  <div>
                    <GridContainer>
                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Cust. Mob NO.
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Cust Name
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Aadhar No
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Cust Addr.
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Sales Person
                            </InputLabel>
                            <br />
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
                                  USER
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>

                    <GridContainer>
                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              State
                            </InputLabel>
                            <br />
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
                                  USER
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              GST Party Type
                            </InputLabel>
                            <br />
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
                                  USER
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              GST Business Type
                            </InputLabel>
                            <br />
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
                                  USER
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              GST TIN No.
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>

                    <GridContainer>
                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              TDS Form
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              Party Aadhar Card No.
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              PAN No.
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>

                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              CIN
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={3} md={3}>
                        <Card>
                          <CardBody>
                            <InputLabel className={classes.label}>
                              FSSAI NO
                            </InputLabel>
                            <br />
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="standard-required"
                                defaultValue=""
                              />
                            </FormControl>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                    
                  </div>
                ),
              },
              {
                tabName: "Expense Details",
                tabIcon: DetailsIcon,
                tabContent: (
                  <Table
                    striped
                    tableHead={[
                      "No.",
                      "Description",
                      "Calc On",
                      "% Amt",
                      "+/-",
                      "Post In",
                      "Amt",
                      "Round Off",
                      "Item Amt",
                      "Bill Amt",
                      "Godown",
                      "Lot No",
                      <Chip label="Add New" color="primary" />,
                    ]}
                    tableData={[
                      [
                        "1",
                        "Office",
                        "25",
                        "25",
                        "25",
                        "25",
                        "€ 25",
                        "€ 1,225",
                        "€ 1,225",
                        "49",
                        "1,225",
                        "1,225",
                        <DeleteIcon color="danger" />,
                      ],

                      //{ total: true, colspan: "5", amount: "€12,999" }
                    ]}
                    customCellClasses={[
                      classes.center,
                      classes.right,
                      classes.right,
                    ]}
                    customClassesForCells={[0, 5, 6]}
                    customHeadCellClasses={[
                      classes.center,
                      classes.right,
                      classes.right,
                    ]}
                    customHeadClassesForCells={[0, 5, 6]}
                  />
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default Purchase_order;
