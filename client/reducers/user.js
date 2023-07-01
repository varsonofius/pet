import { SET_USER, CLEAR_USER, PETCH_USER } from '../actions/user'

const initialState = {
  id: null,
  auth0Id: '',
  email: '',
  name: '',
  token: '',
  description: '',
  location: ''
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user

    case PETCH_USER:
      return action.user

    case CLEAR_USER:
      return initialState

    default:
      return state
  }
}
