import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux/es'

import usuario from './usuario'

export default combineReducers({
  router,
  usuario
})
