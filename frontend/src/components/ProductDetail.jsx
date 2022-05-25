import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { NavLink } from 'react-router-dom';
// import {useHistory} from 'react-router'
// import { addItem, delItem } from "../redux/action/index";



const ProductDetail = () => {
    const [cartBtn , setCartBtn] = useState("Add to Cart")
    let [arr, setArr] = useState({});
    let {id} = useParams();
    id = +id
    console.log(id)
  useEffect(() => {
    getarr()
  }, [])
  // console.log(arr)
  function getarr() {
    axios.get(`https://neetuapi.herokuapp.com/ecommerce/data/${id}`).then((({data}) => {
      setArr(data)
    })
    )

    }

    const dispatch = useDispatch()
    // const history = useHistory()

    const handleAddToCart = (arr) => {
        dispatch(addToCart(arr))
     
    }
 
  return (
      <div>
          <div className="container my-5 py-3">
             <div className="row">
                  <div className="col-md-6 d-flex justify-content-center mx-auto product">
                      <img src={arr.img} alt={arr.title} height="500px"/>
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                      <h1 className='display-5 fw-bold'>{arr.title}</h1>
                      <hr/>
                       <h3 className='my-4'>₹{arr.price}</h3>
            <p className='lead'>{arr.desc}</p>
            <NavLink to="/cart" >
                      <button onClick={() => handleAddToCart(arr)} className="btn btn-outline-dark my-5">{cartBtn}</button>
                  </NavLink>
          </div>
              </div>
              </div>
     </div>
  )
}

export default ProductDetail