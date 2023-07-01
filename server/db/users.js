const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select('id',
      'auth0_id as auth0Id',
      'name',
      'email',
      'location',
      'description')
}

function addUser (input, db = connection) {
  const { auth0Id, name, email, location, description } = input
  const user = { auth0_id: auth0Id, name, email, location, description }
  return db('users')
    .insert(user)
}

function patchUser (user, db = connection) {
  const { auth0Id, location, description, name } = user

  return db('users')
    .where('auth0_id', auth0Id)
    .update({ auth0_id: auth0Id, location, description, name })
}

module.exports = {
  getUsers,
  addUser,
  patchUser
}
