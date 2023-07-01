import { getListing } from '../apis/listings'
import { showError } from './error'

export const FETCH_LISTINGPROFILES_PENDING = 'FETCH_LISTINGPROFILES_PENDING'
export const FETCH_LISTINGPROFILES_SUCCESS = 'FETCH_LISTINGPROFILES_SUCCESS'

export function fetchListingProfilesPending () {
  return {
    type: FETCH_LISTINGPROFILES_PENDING
  }
}

export function fetchListingProfilesSuccess (listingprofiles) {
  return {
    type: FETCH_LISTINGPROFILES_SUCCESS,
    listingprofiles: listingprofiles
  }
}

export function fetchListingProfiles () {
  return (dispatch) => {
    dispatch(fetchListingProfilesPending())
    return getListing()
      .then((listingprofiles) => {
        dispatch(fetchListingProfilesSuccess(listingprofiles))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
