import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles ,fade } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
const useStyles = makeStyles((theme) => ({
    //Search icons styel here
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 2.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        }},
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          inputRoot: {
            color: 'black',
            fontSize:20,
            fontWeight: "bold",
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: '12ch',
              '&:focus': {
                width: '20ch',
              },
            },
          },

//button

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
  createData('Sale Invoice', "SL ", "otherdetails 1","",""),
  createData(' Purchase Invoice', "PI", "otherdetails 1","",""),
  createData('Sale Return', "SRET", "otherdetails 1"),
  createData('Purchase Return', "PRET", "otherdetails 1"),
  createData('Material Requistion', "MR", "otherdetails 1"),
  
 
];

function Series_master (){
    const classes = useStyles();
    return(
       
       <>
            
<div className={classes.root}>
<Button variant="contained" className={classes.root2}><SaveIcon />Save </Button>
    
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button variant="contained" className={classes.root1}>
        <AssignmentLateIcon />Excel
      </Button>
      <Button variant="contained" style={{float:"right" , background:"green", color:"white"}}>
      <AssignmentLateIcon /> <Link to="/admin/AddnewUser" style={{color:"white"}}> Add New </Link>
      </Button>
    
      <span style={{float:"right" , color:"black"}}>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
           
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         </span>
      

     </div>
   
  
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tbrwoe}>
            <TableCell>Voucher Type</TableCell>
            <TableCell align="right">Prefix</TableCell>
            <TableCell align="right">Godown</TableCell>
            <TableCell align="right">Lock Exp</TableCell>
            <TableCell align="right">Manual Series</TableCell>
            <TableCell align="right">Admin User</TableCell>
            <TableCell align="right">Default Cash Bank Account R/P</TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">0</TableCell>
              <TableCell align="right"></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
         
       </>
       
    )
}

export default Series_master