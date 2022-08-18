import React from "react";
import { Typography, Button } from "@material-ui/core";
// import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Checkbox from "@material-ui/core/CheckBox";
import FormControlLabel from '@material-ui/core/FormControlLabel';



function CheckboxExample(){
  const [checked,setChecked]=React.useState(true);
  return(
   
    <FormControlLabel
    control={<Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)} />}
    label="Secondary"
  />      
    
  )
}
function App() {
  return (
    <div className="App">
      <Typography variant="h3">Welcome to material ui shiva</Typography>
<ButtonGroup>
      <Button variant="contained" color="primary" size="small" style={{fontSize:13}} startIcon={<LockIcon />} >
        Login
      </Button>
      <Button variant="contained" color="secondary" size="small" style={{fontSize:13}}  endIcon={<PersonAddIcon />}>
        Register
      </Button>
      </ButtonGroup>
<CheckboxExample/>
  
    </div>
  );
}

export default App;
