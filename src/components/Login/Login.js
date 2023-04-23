import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import mainLogo from '../../images/main-logo.svg'

function Login() {
    return (
        <>
            <section className='login'>
                <div className='login__header'>
                    <Link to='/'><img src={mainLogo} alt='Логотип' className='login__logo' /></Link>
                    <h1 className='login__title'>Рады видеть!</h1>
                </div>
                <form className='login__form' >
                    <fieldset className='login__fieldset' name='signup'>
                        <label className='login__label'>
                            <span className='login__value'>E-mail</span>
                            <input type='email' name='email' className='login__form-item' placeholder='E-mail' required />
                            <span id='login-error' className='login__error'>Пример ошибки</span>
                        </label>
                        <label className='login__label'>
                            <span className='login__value'>Пароль</span>
                            <input type='password' name='password' className='login__form-item' placeholder='Пароль' required />
                            <span id='login-error' className='login__error'>Пример ошибки</span>
                        </label>
                    </fieldset>
                    <button className='login__button' type='submit'>Войти</button>
                    <p className='login__text'>Ещё не зарегистрированы? <Link to='/signup' className='login__text-link'>Регистрация</Link></p>
                </form>
            </section>
        </>
    );
}

export default Login;