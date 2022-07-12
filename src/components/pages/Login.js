import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../../utils/ManageUser'
import Button from '../Button'
import Input from '../Input'
import LoginError from '../inputError'

function Login() {
  const [errShow, setErrShow] = useState(null)

  const getErrClose = () => {
    setErrShow(error => (error = null))
  }

  const handleLogin = async e => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const userData = {
      username: data.get('username'),
      password: data.get('password'),
    }
    const res = await loginUser(userData)
    if (res.status) {
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', res.username)
      window.location = '/task'
    } else {
      setErrShow(res.message)
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          name="username"
          holder="enter your email"
          label="Username"
        />
        <Input
          type="password"
          name="password"
          holder="enter your password"
          label="Password"
        />
        <LoginError status={errShow} errClose={getErrClose} errText={errShow} />
        <div className="flex justify-between items-center">
          <Link to="/register" className="text-purple-main font-light">
            Create an account
          </Link>
          <Button text="Login" type="submit" />
        </div>
      </form>
    </>
  )
}

export default Login
