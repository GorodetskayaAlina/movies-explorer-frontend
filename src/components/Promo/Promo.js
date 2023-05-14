import React from 'react';
import './Promo.css';
import Header from '../Header/Header';
import photo from '../../images/logo.svg';

function Promo({loggedIn}) {
    return (
        <section className='promo'>
            <Header loggedIn={loggedIn} />
            <div className='promo__container'>
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <img className='promo__photo' src={photo} alt='Логотип главной страницы' />
            </div>
        </section>
    )
}

export default Promo;