import React from 'react'
import Button from '../Button'
import './cart.css'

const Cart = ({products}) => {


    const totalP = (products.map( p => p.price ).reduce( (pr, total) => { return total += pr},0));


  return (
    <div className='section'>
        <div className='cart-block'> 
            <h1>Your Cart</h1>
            <div className='overflow p2'>
            { products.map((p) => (
                <div className='cart-product'>
                    <img src={p.photo} alt="" />
                    <div className='data'>
                        <h4>{p.title}</h4>
                        <p>{p.desc}</p>
                        <div style={{ display:"flex", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <label htmlFor='number' style={{ fontSize: '14px', fontWeight:'500', marginRight:'5px'}}>Qty:</label>
                        <input type="number" min={1}  step={1} placeholder={1} />
                        </div>
                    </div>
                    <p>{`Rs. ${p.price}`}</p>
                    <Button value="Remove"/>
                </div>
            ))}
        </div>
        </div>
        <div className='order'>
            <h1>Order Details</h1>
            <div className='allTotal'>
                <div className='total'>
                    <p>Bag Total</p>
                    <h4>{`Rs. ${totalP}`}</h4>
                    
                </div>
                <div className='total'>
                    <p>Delivery</p>
                    <p>FREE</p>
                </div>
                <div className='total final'>
                    <p>Total Amount</p>
                    <h4>{`Rs. ${totalP}`}</h4>
                </div>
            </div>  
            <Button value="Checkout" href="" />
        </div>
    </div>
  )
}

export default Cart