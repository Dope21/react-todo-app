import React, { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import LoginError from '../inputError'
import { regisUser } from '../../utils/ManageUser'

function Register() {
  const [errShow, setErrShow] = useState(false)

  const getErrClose = () => {
    setErrShow(error => (error = false))
  }

  const handleRegis = async event => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const userData = {
      username: data.get('username'),
      password: data.get('password'),
      confirm: data.get('confirm'),
    }

    if (userData.password !== userData.confirm) {
      setErrShow(error => (error = 'Both password are not match.'))
      return
    }

    const res = await regisUser(userData)
    if (res.status) {
      window.location = '/login'
    } else {
      setErrShow(error => (error = res.message))
    }
  }

  return (
    <>
      <form onSubmit={handleRegis}>
        <Input
          name="username"
          type="email"
          holder="enter your email"
          label="Username"
        />
        <Input
          name="password"
          type="password"
          holder="enter your password"
          label="Password"
        />
        <Input
          name="confirm"
          type="password"
          holder="enter your password"
          label="Confirm Password"
        />
        <LoginError status={errShow} errClose={getErrClose} errText={errShow} />
        <div className="flex w-full justify-center">
          <Button text="Enter" type="submit" />
        </div>
      </form>
    </>
  )
}

export default Register
