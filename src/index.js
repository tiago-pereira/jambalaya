import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IndexRoute, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux/es'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import rootReducer from './ducks/index'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

import Usuario from './routes/usuario'
import Login from './routes/login'

const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/usuario" component={Usuario} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

