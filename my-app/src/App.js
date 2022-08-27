import React from "react";

import {Button } from "@material-ui/core";
// import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Checkbox from "@material-ui/core/CheckBox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";
import {makeStyles,ThemeProvider,createMuiTheme}from "@material-ui/core/styles"
import { green, orange } from "@material-ui/core/colors";
// import 'fontscoure-roboto';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


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



const theme=createMuiTheme({
  typography:{
    h2:{
      fontSize:36,
    }
  },
  palette:{
    primary:{
      main:green[500],
    },
    secondary:{
      main:orange[400],
    },
 
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
  <ThemeProvider theme={theme}>
    <Container >
    <div className="App">
<Typography variant="subtitlel">Welcome to MUI</Typography>
      <Typography variant="h2">Welcome to material ui shiva</Typography>
      <ButtonGroup>
        <Button variant="contained" color="primary" size="small" style={{ fontSize: 13 }} startIcon={<LockIcon />} >
          Login
        </Button>
        <Button variant="contained" color="secondary" size="small" style={{ fontSize: 13 }} endIcon={<PersonAddIcon />}>
          Register
        </Button>
      </ButtonGroup>
      <Grid container spacing={6} justify="center" >

      <Grid item  xs={3} sm={3} >
      <Paper style={{height:350,width:"100%",}}>
      <Button variant="contained" color="secondary" size="small" style={{ fontSize: 13 }} endIcon={<PersonAddIcon />}>
          Register
        </Button>
      </Paper>
    </Grid>
    <Grid item  xs={3} sm={3}>
      <Paper style={{height:350,width:"100%",}}/>
    </Grid>
       <Grid item  xs={3} sm={3}>
      <Paper style={{height:350,width:"100%",}}/>
    </Grid>
    <Grid item>
     
    </Grid>
    
      </Grid>
      <CheckboxExample />
      <TextField variant="outlined" color="secondary" label="Enter Email" type="email" placeholder="test@email.com" />
      {/* type="time" */}
      <ButtonStyled/>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
