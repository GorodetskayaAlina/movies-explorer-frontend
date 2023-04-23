import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <section className='navTab'>
            <div className='navTab__link-block'>
                <a className='navTab__link' href='#about-project'>О проекте</a>
                <a className='navTab__link' href='#techs'>Технологии</a>
                <a className='navTab__link' href='#aboutMe'>Студент</a>
            </div>
        </section>
    )
}

export default NavTab;