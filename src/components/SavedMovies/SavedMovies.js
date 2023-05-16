import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies({loggedIn, savedMovies, handleSubmitForm, handleCheckbox, isChecked, onMovieDelete, setIsChecked}) {
  return (
    <div className='savedMovies'>
    <Header loggedIn={loggedIn} />
    <SearchForm handleSubmitForm={handleSubmitForm} handleCheckbox={handleCheckbox} isChecked={isChecked} setIsChecked={setIsChecked} />
    <MoviesCardList isSavedMoviesPage={true} movies={savedMovies} savedMovies={savedMovies} onMovieDelete={onMovieDelete} />
    <Footer />
    </div>
  );
}

export default SavedMovies;