import React from 'react';
import './Popup.css';
import { Link, NavLink } from 'react-router-dom';
import button from '../../images/account-button.svg'

function Popup({onClose}) {
    return (
        <div className='popup popup_opened'>
            <div className='popup__body'>
                <button className='popup__close' type='button' onClick={() => onClose()}/>
                <div className='popup__navigation'>
                    <NavLink exact to='/' className='popup__link' activeClassName='popup__link_active'>
                        Главная
                    </NavLink>
                    <NavLink to='/movies' className='popup__link' activeClassName='popup__link_active'>
                        Фильмы
                    </NavLink>
                    <NavLink to='/saved-movies' className='popup__link' activeClassName='popup__link_active'>
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <div>
                <Link to='/profile'><img src={button} alt='Ссылка на аккаунт' className='popup__button' /></Link>
                </div>
            </div>
        </div>
    );
}

export default Popup;