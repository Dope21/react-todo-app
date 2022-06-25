import React, { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import LoginError from '../inputError'

function Register() {

  const [errShow, setErrShow] = useState(false)

  const getErrClose = () => {
    setErrShow( error => error = false )
  }

  const handleRegis = (event) => {

    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const jsonData = {
        username: data.get('username'),
        password: data.get('password'),
        confirm: data.get('confirm')
    }

    if ( jsonData.password !== jsonData.confirm ) {
      setErrShow( error => error = 'Both password are not match.' )
      return
    }

    fetch('https://authentication-mysql.herokuapp.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.status) {
        window.location = '/login'
      } else {
        setErrShow( error => error = 'This username already in use.' )
      }
    })
    .catch((error) => {
        console.error('error', error)
    })
  };

  return (
    <>
      <form onSubmit={handleRegis}>
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
        <LoginError 
          status={errShow} 
          errClose={getErrClose}
          errText={errShow}
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