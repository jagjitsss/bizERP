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
import PrintIcon from "@material-ui/icons/Print";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "components/Table/Table.js";
import Check from "@material-ui/icons/Check";

import Assignment from "@material-ui/icons/Assignment";

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

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h4 class="jss1400">CREATE PO FROM INDENT - (105)</h4>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.cardContentRight}>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              simple
              color="primary"
              className={classes.marginRight}
            >
              Next
            </Button>

            <Button
              variant="contained"
              color="secondary"
              simple
              className={classes.marginRight}
            >
              Cancel
            </Button>

            <Button
              startIcon={<PrintIcon />}
              variant="contained"
              color="primary"
              simple
              className={classes.marginRight}
            >
              Print
            </Button>
          </div>
        </Grid>
      </Grid>

      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Striped Table</h4>
          </CardHeader>
          <CardBody>
            <Table
              striped
              tableHead={[
                <Checkbox
                  key="key"
                  className={classes.positionAbsolute}
                  tabIndex={-1}
                  onClick={() => handleToggle(1)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  //icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot,
                  }}
                />,
                "IND DATE",
                "IND No",
                "Ship To Name",
                "Item Nm",
                "Order Qty",
                "Pend Qty",
                "UOM ",
                "Rate",
                "Item Amt",
                "Bill Amt",
                "Godown",
                "Lot No",
              ]}
              tableData={[
                [
                  <Checkbox
                    key="key"
                    className={classes.positionAbsolute}
                    tabIndex={-1}
                    onClick={() => handleToggle(1)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    //icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot,
                    }}
                  />,
                  "Moleskine Agenda",
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
                ],

                //{ total: true, colspan: "5", amount: "€12,999" }
              ]}
              customCellClasses={[classes.center, classes.right, classes.right]}
              customClassesForCells={[0, 5, 6]}
              customHeadCellClasses={[
                classes.center,
                classes.right,
                classes.right,
              ]}
              customHeadClassesForCells={[0, 5, 6]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </div>
  );
}
export default Purchase_order;
