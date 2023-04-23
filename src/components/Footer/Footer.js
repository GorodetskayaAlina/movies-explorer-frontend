import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className='footer'>
                <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__line'></div>
                <div className='footer__content'>
                    <p className='footer__copyright'>©2023</p>
                    <div className='footer__links'>
                        <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                        <a className='footer__link' href='https://github.com/GorodetskayaAlina'>Github</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;