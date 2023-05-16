import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  BOTTOM_BORDER_BIG_WIDTH, TOP_BORDER_MIDDLE_WIDTH, BOTTOM_BORDER_MIDDLE_WIDTH, TOP_BORDER_SMALL_WIDTH, ADDING_MOVIES_BIG_WIDTH,
  ADDING_MOVIES_SMALL_WIDTH, MOVIE_LIST_BIG_WIDTH, MOVIE_LIST_MIDDLE_WIDTH, MOVIE_LIST_SMALL_WIDTH
} from '../../utils/constants';

function MoviesCardList({ isSavedMoviesPage, movies, savedMovies, onMovieSave, onMovieDelete }) {
  const [showedMovies, setShowedMovies] = React.useState(movies);

  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  //получаем ширину экрана
  function getWindowWidth() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  //кнопка 'еще'
  function getMoreMovies() {
    if (windowWidth.innerWidth > BOTTOM_BORDER_BIG_WIDTH) {
      setShowedMovies(movies.slice(0, showedMovies.length + ADDING_MOVIES_BIG_WIDTH))
    } else if (windowWidth.innerWidth < TOP_BORDER_MIDDLE_WIDTH && windowWidth.innerWidth > TOP_BORDER_SMALL_WIDTH) {
      setShowedMovies(movies.slice(0, showedMovies.length + ADDING_MOVIES_SMALL_WIDTH))
    }
    else {
      setShowedMovies(movies.slice(0, showedMovies.length + ADDING_MOVIES_SMALL_WIDTH))
    }
  }

  //проверка, сохранен ли фильм
  function checkSavedMovie(movies, movie) {
    return movies.find((item) => {
      return item.movieId === (movie.id || movie.movieId);
    });
  }

  //отслеживаем ширину экрана
  React.useEffect(() => {
    function handleWindowResize() {
      setTimeout(function () {
        setWindowWidth(getWindowWidth());
      }, 500)
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  //отслеживаем изменения экрана
  React.useEffect(() => {
    if (windowWidth.innerWidth > BOTTOM_BORDER_BIG_WIDTH) {
      setShowedMovies(movies.slice(0, MOVIE_LIST_BIG_WIDTH))
    } else if (windowWidth.innerWidth < TOP_BORDER_MIDDLE_WIDTH && windowWidth.innerWidth > TOP_BORDER_SMALL_WIDTH) {
      setShowedMovies(movies.slice(0, MOVIE_LIST_MIDDLE_WIDTH));
    } else if (windowWidth.innerWidth < BOTTOM_BORDER_MIDDLE_WIDTH) {
      setShowedMovies(movies.slice(0, MOVIE_LIST_SMALL_WIDTH));
    } else {
      setShowedMovies(movies);
    }
  }, [windowWidth, movies])

  return (
    <>
      <section className={movies.length === 0 ? 'movies-section movies-section_none' : 'movies-section'} >
        <div className='movies-section__cards'>
          {showedMovies.map((movie) => (<MoviesCard movie={movie} key={isSavedMoviesPage ? movie.movieId : movie.id} isMovieSaved={checkSavedMovie(savedMovies, movie)} isSavedMoviesPage={isSavedMoviesPage} onMovieSave={onMovieSave} onMovieDelete={onMovieDelete} />))}
        </div>
        {isSavedMoviesPage ? <div className='movies-section__div'></div> : <button className={movies.length <= showedMovies.length ? 'movies-section_none' : 'movies-section__button'} onClick={getMoreMovies}>Ещё</button>}
      </section>
    </>
  );
}

export default MoviesCardList;