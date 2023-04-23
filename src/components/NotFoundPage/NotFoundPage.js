import React from 'react';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <section className='notFound'>
            <p className='notFound__status'>404</p>
            <p className='notFound__text'>Страница не найдена</p>
            <button className='notFound__button'>Назад</button>
        </section>
    )
}

export default NotFoundPage;