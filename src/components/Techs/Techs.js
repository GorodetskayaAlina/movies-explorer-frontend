import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className='technologies' id='techs'>
            <h2 className='technologies__title'>Технологии</h2>

            <h3 className='technologies__amount'>7 технологий</h3>

            <p className='technologies__description'>На курсе веб-разработки мы освоили технологии, которые применили в
                дипломном проекте.</p>

            <div className='technologies__cards'>
                <div className='technologies__card'>HTML</div>
                <div className='technologies__card'>CSS</div>
                <div className='technologies__card'>JS</div>
                <div className='technologies__card'>React</div>
                <div className='technologies__card'>Git</div>
                <div className='technologies__card'>Express.js</div>
                <div className='technologies__card'>mongoDB</div>
            </div>
        </section>
    )
}

export default Techs;