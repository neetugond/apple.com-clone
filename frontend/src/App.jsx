import './App.css'
import { Routes, Route } from 'react-router-dom'
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

function App() {

  return (

    <>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product/:id" element={<ProductDetail/>}/>
        <Route exact path="/cart" element={<Cart></Cart>} />
        <Route exact path="/checkout" element={<CheckOut></CheckOut>} />
        <Route exact path="/payment" element={<PaymentPage></PaymentPage>} />
        <Route exact path="/review" element={<Review></Review>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
