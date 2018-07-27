import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu'
import Movie from './components/Movie'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  counterReducer : counter,
  movieReducer : movie,
  postReducer : post
})

const store = createStore(rootReducer, composeEnchancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App>
      <Switch>
        <Route exact path= '/' component={Menu} />
        <Route path='/add-movie' component={Movie} />


      </Switch>
    </App>
  </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
