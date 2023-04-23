import React from 'react';
import './SearchForm.css';
import button from '../../images/search__button.svg';

function SearchForm() {
    return (
        <>
            <section className='search'>
                <form className='search__form' name='search__form'>
                    <input type='text' name='search__input' className='search__input' placeholder='Фильм' />
                    <button className='search__button' type='submit'><img className='search__button' src={button} alt='картинка кнопки поиска'/></button>
                </form>
                <div className='search__line'></div>
                <div className='search__checkbox'>
                    <input type='checkbox' className='search__invisible-checkbox'/>
                    <label className='search__visible-checkbox'></label>
                    <span className='search__span'>Короткометражки</span>
                </div>
            </section>
        </>
    );
}

export default SearchForm;