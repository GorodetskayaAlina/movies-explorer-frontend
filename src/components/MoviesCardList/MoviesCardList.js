import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import photo from '../../images/film.png';

function MoviesCardList({isSavedMoviesPage}) {
  return (
    <>
      <section className='movies-section'>
        <div className='movies-section__cards'>
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
          <MoviesCard isSavedMoviesPage = {isSavedMoviesPage} trailerLink={'https://www.youtube.com/'} image={photo} nameRU={'33 слова о дизайне'} duration={'1ч 47м'} />
        </div>
        {isSavedMoviesPage? <div className='movies-section__div'></div> : <button className='movies-section__button'>Ещё</button>}
      </section>
    </>
  );
}

export default MoviesCardList;