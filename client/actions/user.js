export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const PETCH_USER = 'PETCH_USER'

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function patchUser (user) {
  return {
    type: PETCH_USER,
    user
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}
