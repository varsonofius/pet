import React from 'react'
import { Link } from 'react-router-dom'

export default function ContectBtn () {
  return (
    <Link to='/faq' className='question-bubble'>
      <i className="fa-solid fa-comments"></i>
      <span className='helpText'>Do you need help?</span>
    </Link>
  )
}
