import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

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
    if (windowWidth.innerWidth > 1279) {
      setShowedMovies(movies.slice(0, showedMovies.length + 3))
    } else if (windowWidth.innerWidth < 1280 && windowWidth.innerWidth > 767) {
      setShowedMovies(movies.slice(0, showedMovies.length + 2))
    }
    else {
      setShowedMovies(movies.slice(0, showedMovies.length + 2))
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
    if (windowWidth.innerWidth > 1279) {
      setShowedMovies(movies.slice(0, 12))
    } else if (windowWidth.innerWidth < 1280 && windowWidth.innerWidth > 767) {
      setShowedMovies(movies.slice(0, 8));
    } else if (windowWidth.innerWidth < 768) {
      setShowedMovies(movies.slice(0, 5));
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