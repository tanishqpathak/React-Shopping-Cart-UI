import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { images } from './constants';


const App = () => {

  const products = [
    { 
      photo:`${images.image11}`,
      title: "Asian Grey",
      desc: "Casual sportwear shoes for men - grey",
      price: 1500
    },
    {
      photo:`${images.image12}`,
      title: "Sony VR",
      desc: "Virtual reality set for gaming and powerful experience",
      price: 22000
    },
    {
      photo:`${images.image13}`,
      title: "Peter England",
      desc: "Black fine suit for ceremonies - Men",
      price: 2400
    },
    {
      photo:`${images.image14}`,
      title: "Nike",
      desc: "Casual sports sneaker for men - white",
      price: 1700
    },
    {
      photo:`${images.image15}`,
      title: "Zara",
      desc: "Casual outfit set for women",
      price: 3999
    },
    {
      photo:`${images.image16}`,
      title: "Nike Air Jordan",
      desc: "Olive green colored casual shoes for men",
      price: 12500
    },
    {
      photo:`${images.image17}`,
      title: "Adidas",
      desc: "Black casual jacket for parties",
      price: 1199
    },
    {
      photo:`${images.image18}`,
      title: "Tommy Hilfiger",
      desc: "Leather winter unisex jacket",
      price: 2599
    }
  ]
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/products' element={ <Products products={products}/> }/>
        <Route path='/cart' element={ <Cart products={products}/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
