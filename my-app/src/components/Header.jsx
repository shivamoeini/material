import React from "react";
import {
  Link
} from "react-router-dom";
import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
    shiva: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  button1:{
    borderRadius: (6 ,0, 0, 5),
  }
  }))


function Header() {
    const classheader = useStyles();
    return (
      <AppBar color="accent">
        <Toolbar className={classheader.shiva}>
  
          <div>
            <Typography variant="h6">
              <IconButton>
                <MenuIcon />
              </IconButton>
              MUI
            </Typography>
          </div>
          <div>
            <ButtonGroup >
              <Link to="/singin">
              <Button className={classheader.button1} variant="contained" color="primary" size="small" style={{ fontSize: 13 }} startIcon={<LockIcon />} >
                Login
              </Button>
              </Link>
          <Link to="/singup">
          <Button variant="contained" color="secondary" size="small" style={{ fontSize: 13 }} endIcon={<PersonAddIcon />}>
          Signup

              </Button>
          </Link>
            </ButtonGroup>
          </div>
  
        </Toolbar>
      </AppBar>
    )
}

export default Header;