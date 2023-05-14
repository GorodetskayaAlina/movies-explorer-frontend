import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies({ loggedIn, movies, savedMovies, handleSubmitForm, handleCheckbox, isChecked, isLoading, onMovieSave, setIsChecked }) {

  return (
    <div className='movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm handleSubmitForm={handleSubmitForm} handleCheckbox={handleCheckbox} isChecked={isChecked} setIsChecked={setIsChecked} />
      {isLoading ? <Preloader /> : <MoviesCardList isSavedMoviesPage={false} movies={movies} savedMovies={savedMovies} onMovieSave={onMovieSave} />}
      <Footer />
    </div>
  );
}

export default Movies;