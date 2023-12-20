import React from 'react'
import { useState } from 'react';
import { Drawer,IconButton,List,ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ["Home", "Services","Contact Us","About","Login","Signin"]
const Drawerleft = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List>
            {
                PAGES.map((page,index) => (

            <ListItemButton key={index}>
                <ListItemIcon>
                    <ListItemText>
                        {page}
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
                ))
            }
          </List>       
        </Drawer>
        <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  )
}
export default Drawerleft;