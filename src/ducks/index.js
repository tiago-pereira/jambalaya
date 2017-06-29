import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux/es'

import usuario from './usuario'
import login from './login'

export default combineReducers({
  router,
  usuario,
  login
})
