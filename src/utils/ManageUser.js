import axios from 'axios'

const users_base_url = 'https://authentication-mysql.herokuapp.com'

export const loginUser = async userData => {
  const res = await axios({
    method: 'post',
    url: users_base_url + '/login',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(userData),
  })

  return res.data
}

export const regisUser = async userData => {
  const res = await axios({
    method: 'post',
    url: users_base_url + '/register',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(userData),
  })

  return res.data
}

export const authenUser = async token => {
  const res = await axios({
    method: 'post',
    url: users_base_url + '/authen',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })

  return res.data
}

export const getUser = () => {
  if (localStorage.username) {
    return localStorage.getItem('username')
  }

  return
}
