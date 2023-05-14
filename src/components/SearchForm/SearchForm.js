import React from 'react';
import './SearchForm.css';
import button from '../../images/search__button.svg';
import { useLocation } from 'react-router-dom';
import { useFormWithValidation } from "../../hooks/validation";


function SearchForm({ handleSubmitForm, handleCheckbox, isChecked, setIsChecked }) {
    const location = useLocation().pathname;
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmitSeachForm(e) {
        e.preventDefault();

        if (!isValid) {
            console.log(errors);
        } else {
            handleSubmitForm({ request: values.search__input });
        }
    }

    React.useEffect(() => {
        if (location === '/movies' && localStorage.getItem('searchedText')) {
            const searchedText = localStorage.getItem('searchedText');
            values.search__input = searchedText;
        }

        if (localStorage.getItem('checkboxMovies') === 'true') {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [location]);

    return (
        <>
            <section className='search'>
                <form className='search__form' name='search__form' onSubmit={handleSubmitSeachForm}>
                    <input type='text' name='search__input' className='search__input' placeholder='Фильм' required onChange={handleChange} minLength='1' value={values.search__input || ''} />
                    <button className={!isValid ? 'search__button_error' : 'search__button'} type='submit'><img className={!isValid ? 'search__button_error' : 'search__button'} src={button} alt='картинка кнопки поиска' /></button>
                    <span id='search-error' className='search__error'>{errors.search__input}</span>
                </form>
                <div className='search__line'></div>
                <div className='search__checkbox'>
                    <input type='checkbox' className='search__invisible-checkbox' onChange={handleCheckbox} checked={isChecked} />
                    <label className='search__visible-checkbox'></label>
                    <span className='search__span'>Короткометражки</span>
                </div>
            </section>
        </>
    );
}

export default SearchForm;