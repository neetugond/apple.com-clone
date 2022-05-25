import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { NavLink, Link} from 'react-router-dom';
import DrawerComp from './DrawerComp';
import { AppBar, Typography, Toolbar, Tabs, Tab, useMediaQuery, useTheme, Box } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CartBtn  from './CartBtn';
const Pages =['Store', 'Mac', 'iPad', 'iPhone', 'Watch','AirPods','TV & Home', 'Only on Apple', 'Accessories', 'Support']
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch)
  const {cartTotalQuantity} = useSelector (state => state.cart)
  return (
    <>
      <AppBar sx={{ background: 'black' }}>
       
        <Toolbar sx={{margin:"auto",fontFamily: 'Monospace', width:3.5/4, justifyContent:'space-between'}}>
        
          {isMatch ? (
            <>
              <Typography sx={{width:2/4}}>
                <DrawerComp/>
                <NavLink to="/" ><AppleIcon sx={{ float: "right" }} />
                </NavLink>
              </Typography>
              <div className="cart-count">
                <ShoppingBagOutlinedIcon />
                <span>{cartTotalQuantity }</span>
              </div>
              

            </>
          ) : (
              <>
                   <NavLink to="/" ><AppleIcon sx={{ float: "right"}} />
                </NavLink>
                <Tabs
                  textColor="white"
                  value={value} onChange={(e, value) => setValue(value)} >
                  {/* {Pages.map((page, index) => (
                    <Tab key={index} label={ page}/>
                  ))} */}
                  <NavLink style={{ color: 'white', textUnderlineOffset: 'none' }} to="/product">
                    <Tab label="Store" /></NavLink>
                   <Tab label="Mac" />
                   <Tab label="iPad" />
                   <Tab label="iPhone" />
                   <Tab label="Watch" />
                   <Tab label="AirPods" />
                   <Tab label="TV & Home"/>
                   <Tab label="Only on Apple"/>
                   <Tab label="Accessories" />
                   <Tab label="Support" />
                 </Tabs>
                <SearchIcon />
                <ShoppingBagOutlinedIcon />
                <span>{cartTotalQuantity }</span>
              
               
              </>
          )}
          
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header