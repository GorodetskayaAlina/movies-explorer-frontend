import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
    return (
        <>
            <section className='profile'>
            <Header loggedIn={true} />
                <h1 className='profile__title'>Привет, Алина!</h1>
                <form className='profile__form' >
                    <fieldset className='profile__fieldset' name='signup'>
                        <label className='profile__label'>
                            <span className='profile__value'>Имя</span>
                            <input type='text' name='profilename' className='profile__form-item' placeholder='Имя' value={'Алина'} required />
                            <span id='profile-error' className='profile__error'>Пример ошибки</span>
                        </label>
                        <div className='profile__line'></div>
                        <label className='profile__label'>
                            <span className='profile__value'>E-mail</span>
                            <input type='email' name='email' className='profile__form-item' placeholder='E-mail' value={'pochta@yandex.ru'} required />
                            <span id='profile-error' className='profile__error'>Пример ошибки</span>
                        </label>
                    </fieldset>
                    <button className='profile__button-edit' type='submit'>Редактировать</button>
                    <button className='profile__button-exit' type='button'>Выйти из аккаунта</button>
                </form>
            </section>
        </>
    );
}

export default Profile;