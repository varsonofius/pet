import request from 'superagent'

const rootUrl = '/api/v1/petsitters'

// router.get in petsitters
export function getListing () {
  return request
    .get(rootUrl)
    .then(res => {
      return res.body
    })
  // << if you need MOCK DATA>>
  // return Promise.resolve([{
  //   id: 1,
  //   name:'Ahmad' .....
  // }])
}

// add listing
export function postListing (newListing, token) {
  return request
    .post(rootUrl)
    .set('authorization', `Bearer ${token}`)
    .send(newListing)
    .then(res => res.body)
}

// get listing by id
export function getListingById (id, token) {
  return request
    .get(`${rootUrl}/${id}`)
    .set('authorization', `Bearer ${token}`)
    .then(res => res.body)
}

// update listing
export function updateListing (id, updatedItem, state, navigate) {
  const { auth0Id, token } = state
  const patchListing = {
    ...updatedItem,
    auth0_id: auth0Id
  }

  return request
    .patch(`${rootUrl}/${id}`)
    .set('authorization', `Bearer ${token}`)
    .send(patchListing)
    .catch((err) => {
      console.error(err.message)
    })
    .finally(() => {
      navigate('/petsitters')
    })
}

// delete listing
export function deleteListing (id, token) {
  return request
    .delete(`${rootUrl}/${id}`)
    .set('authorization', `Bearer ${token}`)
    .send()
    .then(res => res.body)
}
