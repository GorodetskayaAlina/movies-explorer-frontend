import React from 'react';
import './MoviesCard.css';

function MoviesCard({ trailerLink, image, nameRU, duration, isSavedMoviesPage }) {
  return (
    <>
      <article className='card' >
        <a href={trailerLink} className='card__link' target='_blank' rel='noreferrer'>
          <img src={`${image}`} alt={`${nameRU}`} className='card__image' />
        </a>
        <div className='card__description'>
          <h2 className='card__name'>{nameRU}</h2>
          <button className={isSavedMoviesPage? 'card__button-delete' : 'card__button-like' } type='button'></button>
          <p className='card__duration'>{duration}</p>
        </div>
      </article>
    </>
  );
}

export default MoviesCard;