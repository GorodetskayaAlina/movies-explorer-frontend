import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, isMovieSaved, isSavedMoviesPage, onMovieSave, onMovieDelete }) {
  const hours = Math.floor(movie.duration / 60);
  const minutes = Math.floor(movie.duration - (hours * 60));

  function handleMovieSave () {
    onMovieSave(movie);
  };

  function handleMovieDelete () {
    onMovieDelete(movie);
  };

  return (
    <>
      <article className='card' >
        <a href={movie.trailerLink} className='card__link' target='_blank' rel='noreferrer'>
          <img src={isSavedMoviesPage ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`} alt={`${movie.nameRU}`} className='card__image' />
        </a>
        <div className='card__description'>
          <h2 className='card__name'>{movie.nameRU}</h2>
          {isSavedMoviesPage ? <button className='card__button-delete' type='button' onClick={handleMovieDelete} />
            : <button className={!isMovieSaved ? 'card__button-like' : 'card__button-like-active'} type='button' onClick={handleMovieSave}></button>}
          <p className='card__duration'>{`${hours}ч ${minutes}м`}</p>
        </div>
      </article>
    </>
  );
}

export default MoviesCard;