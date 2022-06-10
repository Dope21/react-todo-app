import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Input from '../Input'

function Login() {
  return (
    <>
      <form>
        <Input 
          type='email'
          name='username'
          holder='enter your email'
          label='Username'
        />
        <Input 
          type='password'
          name='password'
          holder='enter your password'
          label='Password'
        />
        <div className='flex justify-between items-center'>
          <Link to='/register' className='text-purple-main font-light'>Create an account</Link>
          <Button
            text='Login'
            type='submit'
          />
        </div>
      </form>
    </>
  )
}

export default Login