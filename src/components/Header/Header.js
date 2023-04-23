import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import mainLogo from '../../images/main-logo.svg'
import Navigation from '../Navigation/Navigation';

function Header({loggedIn}) {
    const location = useLocation().pathname;

    return (
        <>
            <header className={location === '/' ? 'header header__pink' : 'header'}>
                <Link to='/' className='header__logo'><img src={mainLogo} alt='Логотип' className='header__logo' /></Link>
                <Navigation loggedIn={loggedIn} />
            </header >
        </>
    );
}

export default Header;