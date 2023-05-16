import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import button from '../../images/account-button.svg'
import Popup from '../Popup/Popup';

function Navigation({ loggedIn }) {
    const location = useLocation().pathname;

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    return (
        <nav className='navigation'>
            {loggedIn ? (
                <>
                    <div className='navigation__movies-container'>
                        <Link to='/movies' className={location === '/movies' ? 'navigation__movies_active' : 'navigation__movies'}>Фильмы</Link>
                        <Link to='/saved-movies' className={location === '/saved-movies' ? 'navigation__saved-movies_active' : 'navigation__saved-movies'}>Сохранённые фильмы</Link>
                    </div>
                    <div>
                        <Link to='/profile'><img src={button} alt='Ссылка на аккаунт' className='navigation__button' /></Link>
                    </div>
                </>
            ) : (
                <div className='navigation__main'>
                    <Link to='/signup' className='navigation__signup'>Регистрация</Link>
                    <Link to='/signin'><button className='navigation__signin'>Войти</button></Link>
                </div>
            )}
            {!isPopupOpen ? (
                <button className={loggedIn ? 'navigation__popup' : 'navigation__popup_close'} onClick={togglePopup}></button>
            ) : <Popup onClose={togglePopup} />
            }
        </nav>
    );
}

export default Navigation;