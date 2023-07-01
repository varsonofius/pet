const connection = require('./connection')

module.exports = {
  listPetsitters,
  addListing,
  deleteListing,
  updateListing,
  fetchListingbyId
}

function listPetsitters (db = connection) {
  return db('petsitters')
    .select()
}

function addListing (listing, db = connection) {
  const { auth0Id, name, location, petNumber, petType, petSize, homeType, serviceRate, availability, description, promoListing, img } = listing
  const newListing = {
    auth0_id: auth0Id,
    name,
    location,
    pet_number: petNumber,
    pet_type: petType,
    pet_size: petSize,
    home_type: homeType,
    service_rate: serviceRate,
    availability,
    description,
    promo_listing: promoListing,
    img
  }
  return db('petsitters')
    .insert(newListing)
}

function deleteListing (id, auth0Id, db = connection) {
  return db('petsitters')
    .where('id', id)
    .first()
    .then(listing => authorizeUpdate(listing, auth0Id))
    .then(() => {
      return db('petsitters')
        .where('id', id)
        .delete()
    })
}

function authorizeUpdate (listing, auth0Id) {
  if (listing.auth0_id !== auth0Id) {
    throw new Error('Unauthorized')
  }
}

function updateListing (id, newdata, db = connection) {
  const { auth0_id } = newdata
  // ignore....it...lint issue but working perfectly
  return db('petsitters')
    .where('id', id)
    .first()
    .then(listing => authorizeUpdate(listing, auth0_id))
    .then(() => {
      return db('petsitters')
        .where({ id, auth0_id })
        .update(newdata)
    })
}

function fetchListingbyId (id, db = connection) {
  return db('petsitters')
    .where('id', id)
    .select()
}
