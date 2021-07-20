import React from 'react'
// Images
import logo from '../images/svg/logo.svg';
import menu from '../images/svg/menu.svg';

const Header = ({ title }) => {
    return (
        <header className="c-header">

            <div className="container">

                <div className="c-header__logo">
                    <img src={logo} alt="logo" className="c-header__logo-img" width="46" />
                </div>

                <h1 className="c-header__title">{ title }</h1>

                <div className="c-header__menu">
                    <img src={menu} alt="menu" className="c-header__menu-img" width="32" />
                </div>
            
            </div>

        </header>
    )
}

export default Header
