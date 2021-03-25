import React from 'react';
import { makeStyles ,fade } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import CloseIcon from '@material-ui/icons/Close';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles((theme) => ({
  
//button


root: {
  '& > *': {
    margin: theme.spacing(1),
    width: '50ch',
  },
},


root1:{
   background: 'green',
   color:"white",
   '&:hover': {
    backgroundColor:"green",
  },
  
},

root2:{
  background: '#3c8dbc',
  color:"white",
  '&:hover': {
    backgroundColor:"#3c8dbc",
  },

},
//table style

table: {
  minWidth: 650,
},
     
      root: {
        flexGrow: 1,
      },
     
      title: {
        flexGrow: 1,
      },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("","","","",""),
 
  
  
 
];

function Add_newSeries (){
    const classes = useStyles();
    return(
       <>
            
<div className={classes.root}>
<Button variant="contained" className={classes.root2}><SaveIcon />Save </Button>
<Button variant="contained"><CloseIcon />Cancel </Button>    
<Button variant="contained" color="secondary"className={classes.button}startIcon={<DeleteIcon />}>Delete</Button>
<Button variant="contained" className={classes.root1}><AssignmentLateIcon />Excel</Button>
 </div>
 <TableContainer component={Paper}>
   <Table>
   <TableHead>
          <TableRow>
            <TableCell className={classes.root}>
            <select style={{padding:15 , fontSize:15}}>
                  <option>please Select</option>
                  <option>Branch 1</option>
                  <option>Branch 2</option>
              </select>
            </TableCell>
            <TableCell align="right">
            <TextField id="filled-basic" label="series Name" variant="filled" /></TableCell>
            <TableCell align="right"><TextField id="filled-basic" label="Prefix" variant="filled" /></TableCell>
            <TableCell align="right"> <TextField id="filled-basic" label="Year Details" variant="filled" /></TableCell>

          </TableRow>
          <TableRow>
            <TableCell>
            <select style={{padding:15 , fontSize:15}}>
                  <option>please Select</option>
                  <option>Branch 1</option>
                  <option>Branch 2</option>
              </select>
            </TableCell>
            <TableCell align="right">
              <TextField id="filled-basic" label="series Name" variant="filled" /></TableCell>
            <TableCell align="right"><TextField id="filled-basic" label="Prefix" variant="filled" /></TableCell>
            <TableCell align="right"> <TextField id="filled-basic" label="Year Details" variant="filled" /></TableCell>

          </TableRow>
        </TableHead>
   </Table>

 </TableContainer>
   
</>
       
    )
}
export default Add_newSeries