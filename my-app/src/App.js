import React from "react";

import { Typography, Button } from "@material-ui/core";
// import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Checkbox from "@material-ui/core/CheckBox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";
import {makeStyles}from "@material-ui/core/styles"







const useStyles=makeStyles({
  root:{
    background:'linear-gradient(45deg,#FE6888,#FF8E53)',
    border:0,
    borderRadius:10,
    color:'white',
    padding:'10 35px',
    margin:15,
  }
})
function ButtonStyled(){
  const classes=useStyles();
  return <Button className={classes.root}>Test Styles Button</Button>
}
function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (

    <FormControlLabel
      control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
      label="Secondary"
    />

  )
}
function App() {
  return (
    <div className="App">

      <Typography variant="h3">Welcome to material ui shiva</Typography>
      <ButtonGroup>
        <Button variant="contained" color="primary" size="small" style={{ fontSize: 13 }} startIcon={<LockIcon />} >
          Login
        </Button>
        <Button variant="contained" color="secondary" size="small" style={{ fontSize: 13 }} endIcon={<PersonAddIcon />}>
          Register
        </Button>
      </ButtonGroup>
      <CheckboxExample />
      <TextField variant="outlined" color="secondary" label="Enter Email" type="email" placeholder="test@email.com" />
      {/* type="time" */}
      <ButtonStyled/>
    </div>
  );
}

export default App;
