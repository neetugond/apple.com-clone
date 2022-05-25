import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function PaymentForm() {
  // const [users, setUsers] = useState([])
  const [obj, setObj] = useState({})
  console.log('obj:', obj)


  const loadUsers = () => {
    axios.get('https://neetuapi.herokuapp.com/ecommerce/users').then(({ data }) =>
      setObj(data[data.length - 1])
    )
  }
  useEffect(() => {
    loadUsers()
  }, [])
  return (

    <div className='payment-main-div'>
      <div className="table-responsive">
        <table className='table' >
          <thead>
            <tr>
              <td>name </td>
              <td>phone</td>
              <td>email</td>
              <td>address</td>
              <td>city</td>
              <td>pincode</td>
            </tr>
          </thead>
          <tbody>{
            // users.map((user, index) => (
            <tr>
              {/* <th scope='row'>{index + 1}</th> */}
              <td>{obj.firstname} { obj.lastname}</td>
              <td>{obj.email}</td>
              <td>{obj.phone}</td>
              <td>{obj.address}</td>
              <td>{obj.city}</td>
              <td>{obj.zipcode}</td>
            </tr>
            // ))
          }

          </tbody>
        </table>
      </div>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <Link to="/review"
      >
        <button>Proceed</button>
      </Link>

    </div>
  );
}