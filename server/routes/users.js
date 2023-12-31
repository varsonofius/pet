const express = require('express')
const jwtAuthz = require('express-jwt-authz')
const checkJwt = require('../auth0')

const db = require('../db/users')
const router = express.Router()

const checkAdmin = jwtAuthz(['read:my_private_route'], { customScopeKey: 'permissions' })

// POST /api/v1/users/protected
router.post('/', async (req, res) => {
  const user = req.body
  try {
    await db.addUser(user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert user into the database' })
  }
})

// GET /api/v1/users/public
router.get('/public', (req, res) => {
  res.json({ message: 'I\'m a public endpoint, any one can access me.' })
})

// GET /api/v1/users/protected
router.get('/protected', checkJwt, (req, res) => {
  res.json({ message: 'I\'m a protected route, only authenticated users can access me.' })
})

// GET /api/v1/users/private
router.get('/private', checkJwt, checkAdmin, (req, res) => {
  res.json({ message: 'I\'m a private route, only authorized users with \'read:my_private_route\' can access me.' })
})

// GET /api/v1/users/
router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({ users })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})



// PATCH /api/v1/users/
router.patch('/', (req, res) => {
  const user = req.body
  db.patchUser(user)
    .then(user => {
      res.json({ user })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
