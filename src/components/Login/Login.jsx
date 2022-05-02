import React from 'react'
import { images } from '../../constants'
import Button from '../Button'
import "./login.css"

const Login = () => {
  return (
    <div className='section log'>  
      <div className='logImg'>
        <img src={images.image4} alt="" />
      </div>
      <form action="" className='formControl'>
      <h1 className='login'>Login</h1>
        <div className='inputFields'>
          <label htmlFor="">Username</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <Button value='Login' />
      </form>
    </div>
  )
}

export default Login