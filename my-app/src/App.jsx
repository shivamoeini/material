import React from "react";

import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from '@material-ui/core/CssBaseline';

// import SaveIcon from '@material-ui/icons/Save';
// import Checkbox from "@material-ui/core/CheckBox";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import TextField from "@material-ui/core/TextField";
// import { green, orange } from "@material-ui/core/colors";
// import 'fontscoure-roboto';
// import Paper from "@material-ui/core/Paper";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  shiva: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: {
    margin: theme.spacing(16,35 ,5),
  
  },
  mgbuton: {
    background: 'linear-gradient(45deg,#FE6888,#FF8E53)',
    border: 0,
    borderRadius: 10,
    color: 'white',
    padding: '60 35px',
    margin: 15,
  },
  heroContent:{
    backgroundColor:theme.palette.background.paper,
    padding:theme.spacing(7,0,6),
   
  }
}))




const theme = createMuiTheme({
  typography: {
    // h2: {
    //   fontSize: 70,
    // },
    h4:{
      fontSize:30,
    }
  },


})



function ButtonMenu() {
  const clas = useStyles();
  return (
    <AppBar color="accent">
      <Toolbar className={clas.shiva}>

        <div>
          <Typography variant="h6">
            <IconButton>
              <MenuIcon />
            </IconButton>
            SHIVA
          </Typography>
        </div>
        <div>
          <ButtonGroup >
            <Button variant="contained" color="primary" size="small" style={{ fontSize: 13 }} startIcon={<LockIcon />} >
              Login
            </Button>
            <Button variant="contained" color="secondary" size="small" style={{ fontSize: 13 }} endIcon={<PersonAddIcon />}>
              Register
            </Button>
          </ButtonGroup>
        </div>

      </Toolbar>
    </AppBar>
  )
}
function App() {
  const shivaa = useStyles();
  return (
  
    <ThemeProvider theme={theme}>
      <Container >
        <div className={shivaa.root}>
          <ButtonMenu padding-right-spacing={3} />
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Album layout
          </Typography>
          <Typography variant="h4" align="center" color="textSecondary">Something Short and leading about the collection below-its contents, the creator,etc.Make it short and sweet, but too short so folks don&apos;t simply skip over it entirely.</Typography>
          </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
