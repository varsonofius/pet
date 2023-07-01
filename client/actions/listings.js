import { getListing, postListing, deleteListing, getListingById } from '../apis/listings'
import { showError } from './error'

export const FETCH_LISTING_PENDING = 'FETCH_LISTING_PENDING'
export const FETCH_LISTING_SUCCESS = 'FETCH_LISTING_SUCCESS'
export const DELETELISTING_FROM_LIST_PENDING = 'DELETELISTING_FROM_LIST_PENDING'
export const DELETELISTING_FROM_LIST_SUCCESS = 'DELETELISTING_FROM_LIST_SUCCESS'
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const UPDATE_LISTING_PENDING = 'UPDATE_LISTING_PENDING'
export const UPDATE_LISTING_SUCCESS = 'UPDATE_LISTING_SUCCESS'

export function fetchListingPending () {
  return {
    type: FETCH_LISTING_PENDING
  }
}

export function fetchListingSuccess (listing) {
  return {
    type: FETCH_LISTING_SUCCESS,
    listing: listing
  }
}

export function fetchListing () {
  return (dispatch) => {
    dispatch(fetchListingPending())
    return getListing()
      .then((listing) => {
        dispatch(fetchListingSuccess(listing))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
// === Add ===
export function addListingToList (listing) {
  return {
    type: ADD_TO_LIST,
    listing
  }
}

export function createNewListing (newListing) {
  return (dispatch) => {
    return postListing(newListing)
      .then(() => {
        return getListing()
      })
      .then(listings => {
        dispatch(fetchListingSuccess(listings))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

// === Delete ====
export function deleteListingPending () {
  return { type: DELETELISTING_FROM_LIST_PENDING }
}

export function deleteListingSuccess (id) {
  return {
    type: DELETELISTING_FROM_LIST_SUCCESS,
    id
  }
}

export function deleteListingFromList (id, token) {
  return (dispatch) => {
    dispatch(deleteListingPending())

    return deleteListing(id, token)
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

// === Edit ===
export function updateListingPending () {
  return {
    type: UPDATE_LISTING_PENDING
  }
}

export function updateListingSuccess (listing) {
  return {
    type: UPDATE_LISTING_SUCCESS,
    listing
  }
}

export function updatingListingById (id, token) {
  return (dispatch) => {
    dispatch(updateListingPending())
    return getListingById(id, token)
      .then(listing => {
        dispatch(updateListingSuccess(listing))
        return null
      })
      .catch(err => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
