import React from 'react'
import Button from '../Button'
import Input from '../Input'

function Register() {
  return (
    <>
      <form>
        <Input 
          name='username'
          type='email'
          holder='enter your email'
          label='Username'
        />
        <Input 
          name='password'
          type='password'
          holder='enter your password'
          label='Password'
        />
        <Input 
          name='confirm'
          type='password'
          holder='enter your password'
          label='Confirm Password'
        />
        <div className='flex w-full justify-center'>
          <Button 
            text='Enter'
            type='submit'
          />
        </div>
      </form>
    </>
  )
}

export default Register