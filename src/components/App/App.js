import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/signup'>
          <Register />
        </Route>

        <Route exact path='/signin'>
          <Login />
        </Route>

        <Route exact path='/profile'>
          <Profile />
        </Route>

        <Route exact path='/movies'>
          <Movies />
        </Route>

        <Route exact path='/saved-movies'>
          <SavedMovies />
        </Route>

        <Route exact path='/'>
          <Main />
        </Route>

        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
