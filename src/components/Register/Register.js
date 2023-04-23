import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import mainLogo from '../../images/main-logo.svg'

function Register() {
    return (
        <>
            <section className='register'>
                <div className='register__header'>
                    <Link to='/'><img src={mainLogo} alt='Логотип' className='register__logo' /></Link>
                    <h1 className='register__title'>Добро пожаловать!</h1>
                </div>
                <form className='register__form' >
                    <fieldset className='register__fieldset' name='signup'>
                        <label className='register__label'>
                            <span className='register__value'>Имя</span>
                            <input type='text' name='profilename' className='register__form-item' placeholder='Имя' required />
                            <span id='register-error' className='register__error'>Пример ошибки</span>
                        </label>
                        <label className='register__label'>
                            <span className='register__value'>E-mail</span>
                            <input type='email' name='email' className='register__form-item' placeholder='E-mail' required />
                            <span id='register-error' className='register__error'>Пример ошибки</span>
                        </label>
                        <label className='register__label'>
                            <span className='register__value'>Пароль</span>
                            <input type='password' name='password' className='register__form-item' placeholder='Пароль' required />
                            <span id='register-error' className='register__error'>Пример ошибки</span>
                        </label>
                    </fieldset>
                    <button className='register__button' type='submit'>Зарегистрироваться</button>
                    <p className='register__text'>Уже зарегистрированы? <Link to='/signin' className='register__text-link'>Войти</Link></p>
                </form>
            </section>
        </>
    );
}

export default Register;