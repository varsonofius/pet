import { setUser } from './actions/user'
// import { setWaiting, clearWaiting } from './actions/waiting'
import { getUser } from './apis/registerationApi'
import { dispatch, getState } from './store'

const emptyUser = {
  auth0Id: '',
  email: '',
  name: '',
  token: '',
  id: null,
  description: '',
  location: ''
}

function saveUser (user = emptyUser) {
  dispatch(setUser(user))
}

export async function cacheUser (useAuth0, navigate) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated) {
    try {
      const state = getState()

      const token = await getAccessTokenSilently()
      const userinfo = await getUser(user.sub, token)

      const { id, name, description, location } = userinfo[0]

      if (state.user.id === null && id === null) {
        navigate('/register')
      }

      const userToSave = {
        id,
        auth0Id: user.sub,
        email: user.email,
        name,
        token,
        description,
        location
      }

      saveUser(userToSave)
    } catch (err) {
      console.error(err)
    }
  }
}

export function getLoginFn (useAuth0) {
  return useAuth0().loginWithRedirect
}

export function getLogoutFn (useAuth0) {
  return useAuth0().logout
}

export function getIsAuthenticated (useAuth0) {
  return useAuth0().isAuthenticated
}

export function getRegisterFn (useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/register`
  return () => loginWithRedirect({
    redirectUri,
    screen_hint: 'signup'
  })
}
