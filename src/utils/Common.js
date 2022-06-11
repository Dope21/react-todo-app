export const setUser = (token, username) => {
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
}

export const removeUser = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
}

export const getUser = () => {

    if (localStorage.username) {
        return localStorage.getItem('username')
    }

    return
}