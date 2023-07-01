import { combineReducers } from 'redux'

import user from './user'
import listings from './listings'
import waiting from './waiting'

export default combineReducers({
  user,
  listings,
  waiting
})
