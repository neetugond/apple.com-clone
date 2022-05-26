import './App.css'
import {useState} from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import "react-toastify/dist/ReactToastify.css"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import CheckOut from './components/Checkout'
import { ToastContainer } from 'react-toastify'
import PaymentPage from './components/PaymentForm'
import Review from './components/Review'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'

function App() {
  const [user, setLoginUser] = useState({})
  // const isAuthToken = useSelector((state) => state.tokenLogin.token);
  // console.log('isAuthToken', isAuthToken);

  // let location = useLocation();
  // const PrivateRoute = ({ isAuthToken, children }) => {
  //   return isAuthToken == "" || isAuthToken==null ? (
  //     <Navigate to="/login" state={{ from: location }} replace />
  //   ) : (
  //     children
  //   );
  // };
  return (

    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/payment" element={<PaymentPage></PaymentPage>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path='/login' element={<Login></Login>}>
        </Route>
        <Route path='/register' element={<Signup></Signup>}>
        </Route>
        <Route path="/checkout" element={<CheckOut/>}></Route>
        {/* <Route
          path="/checkout"
          element={
            <PrivateRoute isAuthToken={isAuthToken}>
              {" "}
              <CheckOut />
            </PrivateRoute>
          }
        ></Route> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
