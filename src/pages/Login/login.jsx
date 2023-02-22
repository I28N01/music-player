import React, { useState } from 'react'
import LoginCSS from './Login.module.scss';
import image from '../../img/skypro.png'
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    if (username != '' && password != '' ) {
      Cookies.set('token', 'pass135');
      navigate('/main', { replace: true })
      console.log (Cookies.get('token'))
      window.location.reload(false);
    }

  }

  return (
    <section className={LoginCSS.login}>
    <div className={LoginCSS.loginBox}>
      <img className={LoginCSS.loginImage} src={image} alt="Logo" />
      <div className={LoginCSS.loginArea}>
        <input className={LoginCSS.loginItem} type="text" placeholder="Логин" value={username} onChange={(event) => setUsername(event.target.value)} />
        <input className={LoginCSS.loginItem} type="password" placeholder="Пароль" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
    <button onClick={handleSubmit} className={`${LoginCSS.signUpButton} ${LoginCSS.Button}`} >Войти</button>
      <NavLink to="/signup"><button className={`${LoginCSS.regButton} ${LoginCSS.Button}`}>Зарегистрироваться</button></NavLink>
    </div>
  </section>
  );
}

export default Login;
