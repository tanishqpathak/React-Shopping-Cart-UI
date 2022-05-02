import React from 'react'
import "./products.css"
import Product from '../Product/Product'

const Products = ({ products }) => {
  return (
    <div className='section prdct'>
        <h1 className='heading'>All Products</h1>
        <div className='all-products p2'>
          { products.map( (p) => 
            <Product p={p}/>
        )}
        </div>
    </div>
  )
}

export default Products