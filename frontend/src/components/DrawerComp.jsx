import React, {useState} from 'react'
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, useMediaQuery, useTheme} from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Pages =['Store', 'Mac', 'iPad', 'iPhone', 'Watch','AirPods','TV & Home', 'Only on Apple', 'Accessories', 'Support']
const DrawerComp = () => {
  // for closing the drawer we need to use state
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
      <>
      <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
        <List >
          {Pages.map((page, index) => (
              <ListItemButton onClick={()=>setOpenDrawer(false)} key ={index}>
              <ListItemIcon>
                <ListItemText>{ page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        
        </List>
      </Drawer>
      <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
        <MenuOutlinedIcon sx={{color:'white', marginRight:"auto"}}/>
      </IconButton>
      </>
  )
}

export default DrawerComp