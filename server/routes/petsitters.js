const express = require('express')
const router = express.Router()
const checkJwt = require('../auth0')
const db = require('../db/petsitters')

module.exports = router

// Get listings for petsitters
router.get('/', (req, res) => {
  db.listPetsitters()
    .then((petsitters) => {
      res.json(petsitters)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send(err.message)
    })
})

// Add new petsitters listing
router.post('/', (req, res) => {
  const listingData = req.body
  db.addListing(listingData)
    .then(result => {
      res.json({ result })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Failed to add listing' })
    })
})

// Delete a single petsitters listing
router.delete('/:id', checkJwt, (req, res) => {
  const id = Number(req.params.id)
  const auth0Id = req.user?.sub
  db.deleteListing(id, auth0Id)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      if (err.message === 'Unauthorized') {
        return res.status(403).send(
          'Unauthorized: Only the user who added the listing may delete it'
        )
      }
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  db.fetchListingbyId(id)
    .then(listing => {
      res.json(listing)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const listingDetails = req.body

  db.updateListing(id, listingDetails)
    .then((listing) => {
      res.json(listing)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Failed to edit listing' })
    })
})
