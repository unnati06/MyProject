import React from 'react'
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Link as RouterLink} from 'react-router-dom';
import { Tabs, Tab,useTheme,useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import Drawerleft from './Drawerleft';

// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import App from '../App';
const PAGES = ["Home", "Services","Contact Us","About"]
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <React.Fragment>
      <AppBar sx = {{background: "#063970"}}> 
          <Toolbar>
            <MenuIcon />
              {isMatch ? (
                <>
                  <Typography sx={{paddingLeft: "2%" }}>
                    Menu
                  </Typography>
                  <Drawerleft/>
                </>
              ) : (
            <>
            
            <Tabs textColor='inherit' value={value} onChange =  {(e,value) => setValue(value)} >
              {
                PAGES.map((page,index) => (
                  <Tab key = {index} label = {page}/>  
                  
                ))
              }
               {/* <Tab label = "Services" /> 
               <Tab label = "Contact Us"/>
               <Tab label = "About" /> */}
            </Tabs>
            <Button sx={{ marginLeft: "Auto"}} variant="contained" component={RouterLink} to='/login'>Login{" "}</Button>
            <Button sx={{ marginLeft: "10px"}} variant = "contained" component = {RouterLink} to='/register'>Sign Up{" "}</Button>
            </>
              )}
          </Toolbar>
       
      </AppBar>
    </React.Fragment>
  )
}
export default Navbar;