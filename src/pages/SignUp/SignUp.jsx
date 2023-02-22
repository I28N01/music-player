import React from 'react';
import SignUpCSS from './SignUp.module.scss';
import image from '../../img/skypro.png'
import { NavLink } from 'react-router-dom';

function SignUp() {
  return (
    <section className={SignUpCSS.login}>
    <div className={SignUpCSS.loginBox}>
      <img className={SignUpCSS.loginImage} src={image} alt="Logo" />
      <div className={SignUpCSS.loginArea}>
        <input className={SignUpCSS.loginItem}type="text" placeholder="Логин" />
        <input className={SignUpCSS.loginItem}type="text" placeholder="Пароль" />
        <input className={SignUpCSS.loginItem}type="text" placeholder="Повторите пароль" />
      </div>
      <button className={`${SignUpCSS.regButton} ${SignUpCSS.Button}`}>Зарегистрироваться</button>
    </div>
  </section>
  );
}

export default SignUp;