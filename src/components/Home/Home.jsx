import React from 'react'
import "./home.css"
import Button from "../Button"

import { images } from '../../constants';

const Home = () => {
  return (
    <div className='section'>
      <div className='text'>
        <h1>Shopping Cart UI</h1>
        <p>This project is build on Javascript & React.js where admin can add products and the users can view products and can add into their cart simultaneously, which will further take them to cart for total and checkout. </p>
        <Button value="Buy" href="products"/>
      </div>
      <div className='image'>
        <img src={images.image} alt="" />
      </div>
    </div>
  )
}

export default Home