import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

function Nav () {
  // const user = useSelector(state => state.user)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin (event) {
    event.preventDefault()
    login()
  }

  function handleLogoff (event) {
    event.preventDefault()
    logout()
  }

  function handleRegister (event) {
    event.preventDefault()
    register()
  }

  return (
    <nav>
      <div className='logo'>
        <Link to='/' className='nav-link logo'>
          <img className='logo-img' src='/images/logo_vector.svg' alt='PetsitterLogo' />
          <h1 className='logo-text'>Petsitter</h1>
        </Link>
      </div>
      <section className='nav-item'>
        <IfAuthenticated>
          <section className='sign'>
            <Link to='/' className='nav-link secondaryhover'>Home</Link>
            <Link to='/myaccount' className='nav-link secondaryhover'>My Account</Link>
            <Link to='/petsitters' className='nav-link secondaryhover'>Find Petsitters</Link>
            <Link to='/faq' className='nav-link secondaryhover'>FAQ</Link>
            <a href='/' onClick={handleLogoff} className='nav-link secondaryhover'>Log Out</a>
          </section>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <section className='sign'>
            <Link to='/' className='nav-link secondaryhover'>Home</Link>
            <a href='/' onClick={handleLogin} className='nav-link secondaryhover'>Sign in</a>
            <a href='/myaccount' onClick={handleRegister} className='nav-link nav-register primaryhover nav-child'>Register</a>
          </section>
        </IfNotAuthenticated>
      </section>
    </nav >
  )
}

export default Nav
