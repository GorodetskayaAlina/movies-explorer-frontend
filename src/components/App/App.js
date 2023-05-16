import React from 'react';
import './App.css';
import { Route, Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import moviesApi from '../../utils/MoviesApi';
import InfoMessagePopup from '../InfoMessagePopup/InfoMessagePopup';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {
  //--------------------ПЕРЕМЕННЫЕ---------------------

  //список всех фильмов
  const [movies, setMovies] = React.useState([]);
  //найденные фильмы по форме
  const [seachedMovies, setSeachedMovies] = React.useState([]);
  //найденные фильмы по чекбоксу
  const [foundMovies, setFoundMovies] = React.useState([]);
  //чекбокс
  const [isChecked, setIsChecked] = React.useState(false);

  const [notFound, setNotFound] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  //попап
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupMessage, setPopupMessage] = React.useState('');

  const location = useLocation().pathname;
  const history = useHistory();

  //проверка регистрации пользователя
  const [loggedIn, setLoggedIn] = React.useState(false);

  //данные профиля
  const [currentUser, setCurrentUser] = React.useState({});

  //все сохраненные фильмы
  const [savedMovies, setSavedMovies] = React.useState([]);
  //найденные сохраненные фильмы по форме
  const [seachedSavedMovies, setSeachedSavedMovies] = React.useState([]);
  //найденные сохраненные фильмы по чекбоксу
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  //чекбокс сохраненных фильмов
  const [isCheckedSavedMovies, setIsCheckedSavedMovies] = React.useState(false);
  //статус "не найдено" сохраненных фильмов
  const [notFoundSavedMovies, setNotFoundSavedMovies] = React.useState(false);

  //----------------------ПОПАП-----------------------
  function closePopup() {
    setIsPopupOpen(!isPopupOpen);
    setPopupMessage('');
  };

  //-----------------СТРАНИЦА ФИЛЬМОВ-----------------

  //сабмит поиска всех фильмов
  function handleSubmitGetMovies({ request }) {
    // начальный запрос всех фильмов
    if (movies.length === 0) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then(movies => {
          setMovies(movies);
          seachMovies(request, movies);
        })
        .catch(() => {
          setPopupMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
          setIsPopupOpen(true);
        })
        .finally(() => {
          setIsLoading(false);
        })
    } else {
      seachMovies(request, movies);
    }
  }

  //фильтр поиска через форму
  function filterMovies(request, movies) {
    return movies.filter(movie => movie.nameRU.toLowerCase().trim().includes(request.toLowerCase().trim()));
  }

  //фильтр чекбокса
  function filterCheckboxMovies(movies) {
    return movies.filter(movie => movie.duration < 40);
  }

  //поиск фильмов 
  function seachMovies(request, movies) {
    if (request.trim().length === 0) {
      setPopupMessage('Введите запрос');
      setIsPopupOpen(true);
      return;
    }

    const listFilms = filterMovies(request, movies);
    if (listFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setSeachedMovies(listFilms);
      setFoundMovies(listFilms);
      localStorage.setItem('searchedText', request);
      localStorage.setItem('movies', JSON.stringify(listFilms));
      return;
    }

    localStorage.setItem('searchedText', request);
    localStorage.setItem('checkboxMovies', isChecked);

    setSeachedMovies(listFilms);

    const listCheckboxFilms = filterCheckboxMovies(listFilms);

    setFoundMovies(isChecked ? listCheckboxFilms : listFilms);

    localStorage.setItem('movies', JSON.stringify(isChecked ? listCheckboxFilms : listFilms));

    if (isChecked && listCheckboxFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setNotFound(true);
    }
  }

  //чекбокс
  function handleCheckboxMovies() {
    const listCheckboxFilms = filterCheckboxMovies(seachedMovies);
    setIsChecked(!isChecked);
    if (!isChecked) {
      if (notFound || (listCheckboxFilms.length === 0)) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundMovies(listCheckboxFilms);
      setNotFound(false);
    } else {
      if (seachedMovies.length === 0) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundMovies(seachedMovies);
    }
    localStorage.setItem('checkboxMovies', !isChecked);
  }

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      setSeachedMovies(JSON.parse(localStorage.getItem('movies')));
      if (localStorage.getItem('checkboxMovies') === 'true') {
        setFoundMovies(filterCheckboxMovies(JSON.parse(localStorage.getItem('movies'))));
      } else {
        setFoundMovies(JSON.parse(localStorage.getItem('movies')));
      }
    }
  }, [location]);

  //----------------СОХРАНЕННЫЕ ФИЛЬМЫ----------------

  //сохранение фильма
  function handleMovieLike(movie) {
    //определяем, ставил ли пользователь лайк
    const isLiked = savedMovies.some(item => item.movieId === movie.id);
    //получаем сохраненный фильм
    function getSavedMovie() {
      let savedMovie;
      savedMovies.forEach((item) => {
        if (item.movieId === movie.id) {
          savedMovie = item;
        } else {
          return;
        }
      });
      return savedMovie;
    }

    if (isLiked) {
      mainApi.deleteMovieItem(getSavedMovie()._id)
        .then((movie) => {
          setSavedMovies(savedMovies.filter(item => movie._id !== item._id));
          setFoundSavedMovies(savedMovies.filter(item => movie._id !== item._id));
        })
        .catch((err) => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        })
    } else {
      mainApi.changeLikeMovieStatus(movie)
        .then((newSavedMovie) => {
          setSavedMovies([newSavedMovie, ...savedMovies]);
          setFoundSavedMovies([newSavedMovie, ...savedMovies]);
        })
        .catch((err) => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        })
    }
  }

  //удаление фильма из сохраненных
  function deleteMovieItem(movie) {
    mainApi.deleteMovieItem(movie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item => movie._id !== item._id));
        setFoundSavedMovies(savedMovies.filter(item => movie._id !== item._id));
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      });
  }

  //сабмит поиска сохраненных фильмов
  function handleSubmitSavedMovies({ request }) {
    seachSavedMovies(request, savedMovies);
  }

  //поиск сохраненных фильмов 
  function seachSavedMovies(request, movies) {
    if (request.trim().length === 0) {
      setPopupMessage('Введите запрос');
      setIsPopupOpen(true);
      return;
    }

    const listFilms = filterMovies(request, movies);
    if (listFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setSeachedSavedMovies(listFilms);
      setFoundSavedMovies(listFilms);
      return;
    }

    setSeachedSavedMovies(listFilms);

    const listCheckboxFilms = filterCheckboxMovies(listFilms);

    setFoundSavedMovies(
      isCheckedSavedMovies ? listCheckboxFilms : listFilms
    );

    if (isCheckedSavedMovies && listCheckboxFilms.length === 0) {
      setPopupMessage('Ничего не найдено');
      setIsPopupOpen(true);
      setNotFoundSavedMovies(true);
    }
  }

  //чекбокс сохраненных фильмов 
  function handleCheckboxSavedMovies() {
    const listCheckboxFilms = filterCheckboxMovies(seachedSavedMovies);
    setIsCheckedSavedMovies(!isCheckedSavedMovies);
    if (!isCheckedSavedMovies) {
      if (notFoundSavedMovies || (listCheckboxFilms.length === 0 && savedMovies.length !== 0)) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundSavedMovies(listCheckboxFilms);
      setNotFoundSavedMovies(false);
    } else {
      if (seachedSavedMovies.length === 0) {
        setPopupMessage('Ничего не найдено');
        setIsPopupOpen(true);
      }
      setFoundSavedMovies(seachedSavedMovies);
    }
  }

  //-------------------РЕГИСТРАЦИЯ--------------------
  function handleRegister({ name, email, password }) {
    auth.register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      })
  }

  //------------------АУТЕНТИФИКАЦИЯ------------------
  function handleLogin(userData) {
    auth.authorize(userData.email, userData.password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      })
  }

  //Проверка токена
  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
          history.push(location);
        }
      })
        .catch((err) => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        })
    }
  }

  React.useEffect(() => {
    checkToken();
  }, []);

  //Выход из аккаунта
  function onSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    history.push('/');
    setFoundMovies([]);
  }

  //---------------------ПРОФИЛЬ----------------------

  //Обновление профиля
  function handleUpdateUser({ name, email }) {
    mainApi.updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        setPopupMessage(err);
        setIsPopupOpen(true);
      })
  }

  //получение информации о пользователе и его сохраненных карточках
  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      Promise.all([mainApi.getUserInfo(), mainApi.getInitialMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setSavedMovies(movies);
          setFoundSavedMovies(movies);
          setSeachedSavedMovies(movies);
        })
        .catch((err) => {
          setPopupMessage(err);
          setIsPopupOpen(true);
        })
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>

          <Route exact path='/signup'>
            {loggedIn? <Redirect to='/' /> : <Register onRegister={handleRegister} />}
          </Route>

          <Route exact path='/signin'>
          {loggedIn? <Redirect to='/' /> : <Login onLogin={handleLogin} />}
          </Route>

          <ProtectedRoute exact path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onSignOut={onSignOut}
            onUpdateUser={handleUpdateUser}
          />

          <ProtectedRoute exact path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            movies={foundMovies}
            savedMovies={savedMovies}
            handleSubmitForm={handleSubmitGetMovies}
            handleCheckbox={handleCheckboxMovies}
            isChecked={isChecked}
            isLoading={isLoading}
            onMovieSave={handleMovieLike}
            setIsChecked={setIsChecked}
          />

          <ProtectedRoute exact path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={foundSavedMovies}
            handleSubmitForm={handleSubmitSavedMovies}
            handleCheckbox={handleCheckboxSavedMovies}
            isChecked={isCheckedSavedMovies}
            onMovieDelete={deleteMovieItem}
            setIsChecked={setIsChecked}
          />

          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>

        <InfoMessagePopup message={popupMessage} isOpen={isPopupOpen} onClose={closePopup} />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
