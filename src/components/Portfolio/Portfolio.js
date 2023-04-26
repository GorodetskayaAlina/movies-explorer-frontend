import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>

            <a className='portfolio__github-link' target='_blank' rel='noreferrer' href='https://github.com/GorodetskayaAlina/how-to-learn'>Статичный сайт <span>↗</span></a>
            <a className='portfolio__github-link' target='_blank' rel='noreferrer' href='https://github.com/GorodetskayaAlina/russian-travel'>Адаптивный сайт <span>↗</span></a>
            <a className='portfolio__github-link' target='_blank' rel='noreferrer' href='https://github.com/GorodetskayaAlina/react-mesto-api-full'>Одностраничное приложение <span>↗</span></a>
        </section>
    )
}

export default Portfolio;