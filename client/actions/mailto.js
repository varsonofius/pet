import React from 'react'
import { Link } from 'react-router-dom'

const ButtonMailto = ({ mailto, label }) => {
  return (

    <button className='nav-register button-profile button-mailto primaryhover'>
      <i className="fa-solid fa-envelope"></i>
      <Link
        to='#'
        onClick={(e) => {
          window.location = mailto
          e.preventDefault()
        }}
      >
        {label}
      </Link>
    </button>
  )
}

export default ButtonMailto
