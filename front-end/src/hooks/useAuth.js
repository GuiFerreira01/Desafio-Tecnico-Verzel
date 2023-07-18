import api from '../utils/api'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useFlashMessage from './useFlashMessage'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function register(user) {
    let msgText = 'Cadastro realizado com sucesso!'
    let msgType = 'success'

    try {
      const data = await api.post('/register', user).then((response) => {
        return response.data
      })
      console.log(data)

      history.push('/login')
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  async function login(user) {
    let msgText = 'Login realizado com sucesso!'
    let msgType = 'success'

    try {
      console.log(user)
      localStorage.setItem('user', user)
      
      const data = await api.post('/login', user).then((response) => {
        console.log(response)
        return response.data
      })

      await authUser(data)
    } catch (error) {
      msgText = 'Seua usuario ou senha esta incorreto'
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  async function authUser(data) {

    const { token, role } = data
    setAuthenticated(true)
    console.log(`user this token ${token}`)
    localStorage.setItem('token', token)


    const userRole = role.find(({ authority }) => authority === 'ROLE_ADMIN')
    console.log(`user this role ${userRole}`, btoa('ROLE_USER'))
    localStorage.setItem('role', userRole ? btoa('ROLE_ADMIN') : btoa('ROLE_USER') )

    history.push('/')
    window.location.reload(true)
  }

  function logout() {
    const msgText = 'Logout realizado com sucesso!'
    const msgType = 'success'

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined
    history.push('/login')

    window.location.reload(true)
    setFlashMessage(msgText, msgType)
  }

  return { authenticated, loading, register, login, logout }
}
