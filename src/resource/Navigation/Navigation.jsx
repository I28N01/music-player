import React from 'react';
import NavigationCSS from './Navigation.module.scss';
import logo from '../../img/logo.png';
const { useState } = React;

function Navigation() {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);
    return (
        <nav className={`${NavigationCSS.main__nav} ${NavigationCSS.nav}`}>
            <div className={`${NavigationCSS.nav__logo} ${NavigationCSS.logo}`}>
                <img className={NavigationCSS.logo__image} src={logo} alt="logo"></img>
            </div>
            <div className={`${NavigationCSS.nav__burger} ${NavigationCSS.burger}`} onClick={toggleVisibility}>
                <span className={NavigationCSS.burger__line}></span>
                <span className={NavigationCSS.burger__line}></span>
                <span className={NavigationCSS.burger__line}></span>
            </div>
            
            {visible && (
             <div className={NavigationCSS.nav__menu}>
                <ul className={NavigationCSS.menu__list}>
                    <li className={NavigationCSS.menu__item}><a href="#" className={NavigationCSS.menu__link}>Главное</a></li>
                    <li className={NavigationCSS.menu__item}><a href="#" className={NavigationCSS.menu__link}>Мой плейлист</a></li>
                    <li className={NavigationCSS.menu__item}><a href="#" className={NavigationCSS.menu__link}>Войти</a></li>
                </ul>
            </div>
            )}
        </nav>
    );
  }
  
  export default Navigation;