import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux' //access to global state
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {addToCart, clearCart, decreaseCart, removeFromCart, getTotals} from '../features/cartSlice'



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }
   return (
   <TableContainer
      className='cart-container'
    style={{ marginTop: 120 }} >
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <span>
                <ArrowBackIcon />
                start Shopping
              </span>
            </Link>

          </div>
        </div>
      ) : (

          <div className='main-cart-div'>
          <TableRow className='titles'>
            <TableCell cassName="product-title" >
              Product
            </TableCell>
            <TableCell className="price">
              Price
            </TableCell>
            <TableCell className="Quantity">
              Quantity
            </TableCell>
            <TableCell className="total">
              Total
            </TableCell>
            </TableRow>
        <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.img} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    {/* <p>{cartItem.desc}</p> */}
                    <button onClick={()=> handleRemoveFromCart(cartItem)} >Remove</button>
                  </div>
                </div>
                <div>
                  <div className="cart-product-price">${cartItem.price}</div>
                </div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem) } >+</button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="cart-summary">
            <button className="clear-cart" onClick ={()=> handleClearCart()}>Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>
                  Subtotal
                </span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
               <Link to={"/checkout"} > <button>Check out</button></Link>
               <div className="continue-shopping">
                <Link to="/">
                  <span>
                    <ArrowBackIcon />
                    Continue Shopping
                  </span>
                </Link>

              </div>
            </div>

          </div>
        </div>
      )}

    </TableContainer>



  )
}

export default Cart