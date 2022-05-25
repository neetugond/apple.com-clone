import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getTotals } from '../features/cartSlice'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'



export default function Review() {

  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector((state) => state.cart);
  console.log("Cartdetails: ", cartItems, cartTotalQuantity, cartTotalAmount)
  const dispatch = useDispatch()

  var totalCartPrice = 0

  
  useEffect(() => {
    dispatch(getTotals())
  }, [dispatch])
  const [users, setUsers] = useState([])
  const [obj, setObj] = useState({})


  const loadUsers = () => {
    axios.get('https://neetuapi.herokuapp.com/ecommerce/users').then(({ data }) =>
      setObj(data[data.length - 1])
    )
  }
  useEffect(() => {
    loadUsers()
  }, [])
  return (
    <div className='main-review-div'>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
     
        {cartItems.map((product, id) => {
          totalCartPrice += product.price * product.cartQuantity;
          return(
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} />
            <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          )
        })}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalCartPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{obj.firstname} { obj.lastname}</Typography>
          <Typography gutterBottom>{obj.phone}</Typography>
          <Typography gutterBottom>{obj.email}</Typography>
          <Typography gutterBottom>{obj.address}</Typography>
         
        </Grid>
      </Grid>
      <Grid>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Thankyou for Shopping {obj.firstname} {obj.lastname}, Your order will delivered soon</Typography>
        
      </Grid>
     
               <div className="continue-shopping">
                <Link to="/">
                  <span >
            
            <h5><ArrowBackIcon /> Continue Shopping</h5> </span>
        </Link>
        </div>
        
      

    </div>
  );
}