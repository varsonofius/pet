import { FETCH_LISTINGPROFILES_SUCCESS } from '../actions/listingProfiles'

function listingProfiles (state = [], action) {
  switch (action.type) {
    case FETCH_LISTINGPROFILES_SUCCESS:
      return action.profiles

    default:
      return state
  }
}

export default listingProfiles
