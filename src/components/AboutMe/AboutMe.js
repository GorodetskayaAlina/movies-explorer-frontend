import React from 'react';
import './AboutMe.css';
import student from '../../images/photo.jpg';

function AboutMe() {
  return (
    <>
    <section className='aboutMe' id='aboutMe'>
        <h2 className='aboutMe__title'>Студент</h2>
        <div className='aboutMe__columns'>
            <div className='aboutMe__text-block'>
                <h3 className='aboutMe__name'>Алина</h3>

                <p className='aboutMe__specialization'>Фронтенд-разработчик, 24 года</p>

                <p className='aboutMe__description'>Я родилась в Московской области, живу в Москве, окончила факультет
                    публичного права и управления МГЮА им. О.Е. Кутафина. Недавно начала кодить. С 2020 года работала
                    помощником юриста. На данный момент прохожу курс по веб-разработке, планирую заниматься фриланс-заказами.</p>

                <a className='aboutMe__github-link' target='_blank' rel='noreferrer' href='https://github.com/GorodetskayaAlina'>Github</a>
            </div>

            <img className="aboutMe__photo" src={student} alt='Фото создателя сайта' />
        </div>
    </section>
    </>
  );
}

export default AboutMe;