import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies() {
  return (
    <div className='savedMovies'>
    <Header loggedIn={true} />
    <SearchForm />
    <MoviesCardList isSavedMoviesPage={true} />
    <Footer />
    </div>
  );
}

export default SavedMovies;