import React from 'react';
import NavigationCSS from './Navigation.module.scss';
import logoLight from '../../img/logo.png';
import logoDark from '../../img/logoDark.png';
const { useState } = React;
import Toggle from '../Toggle'
import { ThemeContext, themes } from '../../themes/ThemeContext'

function Navigation() {
    const [visible, setVisible] = useState(false);
    const [logo, setLogo] = useState(logoLight);
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
                <ThemeContext.Consumer>
                    {({ theme, setTheme }) => (
                        <Toggle
                        onChange={() => {
                        if (theme === themes.light) {
                            setTheme(themes.dark)
                            setLogo(logoLight)
                        }
                        if (theme === themes.dark) {
                            setTheme(themes.light)
                            setLogo(logoDark)
                        }
                        }}
                        value={theme === themes.dark}
                        />
                    )}

                </ThemeContext.Consumer>
            </div>
            )}


        </nav>


    );
  }
  
  export default Navigation;