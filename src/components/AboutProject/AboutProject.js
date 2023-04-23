import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about' id='about-project'>
            <h2 className='about__title'>О проекте</h2>

            <div className='about__descriptions'>
                <div className='about__description-title'>
                    <h3>Дипломный проект включал 5 этапов</h3>
                    <h3>На выполнение диплома ушло 5 недель</h3>
                </div>
                <div className='about__description'>
                    <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className='about__descriptions-min'>
                <div className='about__description'>
                    <h3>Дипломный проект включал 5 этапов</h3>
                    <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about__description'>
                    <h3>На выполнение диплома ушло 5 недель</h3>
                    <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className='about__times'>
                <div className='about__term'>
                    <div className='about__backend-time'>1 неделя</div>
                    <div className='about__frontend-time'>4 недели</div>
                </div>
                <div className='about__projects'>
                    <div className='about__project'>Back-end</div>
                    <div className='about__project'>Front-end</div>
                </div>

            </div>
        </section>
    )
}

export default AboutProject;