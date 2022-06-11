import React from 'react'
import Button from '../Button'
import Input from '../Input'

function Register() {

  const handleRegis = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
        username: data.get('username'),
        password: data.get('password')
    }

    fetch('http://localhost:3333/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        window.location = '/login'
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