const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const domain = 'https://harakeke-2022-jinny.au.auth0.com'
const audience = 'https://petsitter/api'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256']
})

module.exports = checkJwt
