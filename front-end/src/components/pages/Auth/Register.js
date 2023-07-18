import { useState, useContext } from 'react'
import Input from '../../form/Input'
import { Link } from 'react-router-dom'

import styles from '../../form/Form.module.css'

/* contexts */
import { Context } from '../../../context/UserContext'

function Register() {
  const [user, setUser] = useState({})
  const [userRole, setUserRole] = useState(false)
  const { register } = useContext(Context)

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleCheckboxChange(e) {
    setUserRole(e.target.checked)
  }

  function handleSubmit(e) {
    e.preventDefault()
    user.username = user.username || ''
    user.password = user.password || ''
    user.role = userRole ? 'ADMIN' : 'USER'
    const message = 'Todos os campos devem ser preenchidos'
    let canCreate = true

    if(!user.username) {
      canCreate = false
      return alert(message)
    }
    if(!user.password) {
      canCreate = false
      return alert(message)}
    if(!user.confirmpassword) {
      canCreate = false
      return alert(message)
    }

    if(user.password !== user.confirmpassword) {
      canCreate = false
      console.log(user)
      return alert('As senhas não estao iguais')
    }

    if(canCreate){
      register(user)
    }
  }

  return (
    <section className={styles.form_container}>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="username"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          pattern={'.{8,}'}
          handleOnChange={handleChange}
        />
        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme a sua senha"
          pattern={'.{8,}'}
          handleOnChange={handleChange}
        />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <input 
            style={{marginRight: 5, marginBottom: 15}}
            type="checkbox" 
            onChange={(e) => handleCheckboxChange(e)}
            value={userRole}
            name="isAdmin"
            id="isAdmin" 
          />
          <label htmlFor='isAdmin'>Is admin?</label>

        </div>

        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </section>
  )
}

export default Register
