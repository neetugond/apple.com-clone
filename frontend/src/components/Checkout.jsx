import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getTotals } from '../features/cartSlice'
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'; 
// import { toast } from "react-toastify"
import axios from 'axios';



const Checkout = () => {


  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector((state) => state.cart);
  // console.log("Cart: ", cartItems, cartTotalQuantity, cartTotalAmount)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // let history = useHistory ();

  var totalCartPrice = 0

  const [checkoutInput, setCheckoutInput] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",

  })
  const [error, setError] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    dispatch(getTotals())
  }, [dispatch])

  useEffect(() => {

    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(checkoutInput);
    }
  })

  // useEffect(() => {
  //   localStorage.setItem('checkoutInput', JSON.stringify(checkoutInput))
  // }, [checkoutInput])


  // const getDatalocalS = ()=>{
  //   const data = localStorage.getItem('checkoutInput')
  //   if (data) {
  //     return JSON.parse(data);
  //   } else {
  //     return []
  //   }
  // }

  const handleInput = (e) => {

    e.persist();
    setCheckoutInput({ ...checkoutInput, [e.target.name]: e.target.value })
    console.log(checkoutInput)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(checkoutInput));
    setIsSubmit(true)
    axios.post('https://neetuapi.herokuapp.com/ecommerce/users', checkoutInput).then(() => {
      console.log("Data Inserted")
    })
    // navigate('/payment')
    // history.push ('/Payment');
  }

  const validate = (values) => {
    const err = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.firstname) {
      err.firstname = "firstname is required"
    }
    if (!values.lastname) {
      err.lastname = " lastname is required"
    }
    if (!values.phone) {
      err.phone = "phone number is required"
    }
    if (!values.email) {
      err.email = "email is required"
    }
    else if (!regex.test(values.email)) {
      err.email = "This is not a valid email format !"
    }
    if (!values.address) {
      err.address = "address is required"
    }
    if (!values.city) {
      err.city = "city is required"
    }
    if (!values.zipcode) {
      err.zipcode = "zip code is required"
    }

    return err;


  }

  return (
    <div>
      <div className='py-3 bg-warning'>

        <div className="container">
          <h6>Home/Cart</h6>
        </div>
      </div>
      <div className="py-4">
        <div className="container">


          {Object.keys(error).length === 0 && isSubmit ? ( <p></p>) : (
            <p></p>)}
          {/* <pre>{JSON.stringify(checkoutInput, undefined, 6)}</pre> */}
          <div className="row">
            <div className=" main-checkout col-md-7">

              <form onClick={handleSubmit} className="card">
                <div className="card-header">
                  <h4>Basic Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>First Name</label>
                        <input type="text" name='firstname' className='form-control' onChange={handleInput} value={checkoutInput.firstname} />
                        <small className='text-danger'>{error.firstname}</small>

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Last Name</label>
                        <input type="text" name='lastname' className='form-control' onChange={handleInput} value={checkoutInput.lastname}
                        />
                        <small className='text-danger'>{error.lastname}</small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Phone Number</label>
                        <input type="text" name='phone' className='form-control' onChange={handleInput} value={checkoutInput.phone} />
                        <small className='text-danger'>{error.phone}</small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Email Address</label>
                        <input type="text" name='email' className='form-control' onChange={handleInput} value={checkoutInput.email} />
                        <small className='text-danger'>{error.email}</small>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label>Full Address</label>
                        <textarea rows="3" name='address' className="form-control" onChange={handleInput} value={checkoutInput.address}>
                          <small className='text-danger'>{error.address}</small>
                        </textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>City</label>
                        <input type="text" name='city' className='form-control' onChange={handleInput} value={checkoutInput.city} />
                        <small className='text-danger'>{error.city}</small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Zip code</label>
                        <input type="text" name='zipcode' className='form-control' onChange={handleInput} value={checkoutInput.zipcode} />
                        <small className='text-danger'>{error.zipcode}</small>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-end">
                        <Link to="/payment">
                          <button type='button' className='btn btn-dark' >Place Order</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="col-md-5">
                <table className="table table-bordered">
                  <thead>
                    <tr className=' fw-bold' >
                      <td width="50%">Product</    td>
                      <td>Price</td>
                      <td>Qty</td>
                      <td>Total</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((e, id) => {
                      totalCartPrice += e.price * e.cartQuantity;
                      return (
                        <tr key={e.id}>
                          <td>{e.title}</td>
                          <td>{e.price}</td>
                          <td>{e.cartQuantity}</td>
                          <td>{e.price * e.cartQuantity}</td>
                        </tr>
                      )
                    })}
                    <tr>
                      <td colSpan="2" className="text-end fw-bold">Grand Total</td>
                      <td colSpan="2" className="text-end fw-bold">{totalCartPrice}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout