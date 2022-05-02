import React from 'react'
import "./register.css"
import Button from '../Button'
import { images } from '../../constants'

const Register = () => {
  return (
    <div className='section reg'>  
      <div className='regImg'>
        <img src={images.image2} alt="" />
      </div>
      <form action="" className='formControl'>
      <h1 className='register'>Register</h1>
        <div className='inputFields'>
          <label htmlFor="">Username</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <Button value='Register' />
      </form>
    </div>
  )
}

export default Register