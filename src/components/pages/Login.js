import React from 'react'
import { Link } from 'react-router-dom'
import { setUser } from '../../utils/Authen'
import Button from '../Button'
import Input from '../Input'

function Login() {

  const handleLogin = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const jsonData = {
      username: data.get('username'),
      password: data.get('password'),
    }

    fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(response => response.json())
    .then(data => {
      setUser(data.token, data.username)
      window.location = '/task'
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <>
      <form onSubmit={handleLogin}>
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