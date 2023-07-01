import React from 'react'
import { Link } from 'react-router-dom'

export default function MyAccount (props) {
  const { name, email, location, description } = props.user

  return (
    <section className='myaccount'>
      <h1>My Account</h1>
      <ul className='myaccount-list'>
        <li><i className="fa-solid icon_deco fa-user"></i><span>Name :</span>{name}</li>
        <li><i className="fa-solid icon_deco fa-envelope"></i><span>Email :</span>{email}</li>
        <li><i className="fa-solid icon_deco fa-location-dot"></i><span>Location :</span>{location}</li>
        <li><i className="fa-solid icon_deco fa-kiwi-bird"></i><span>Introduction :</span><p className='descriptionP'> {description} </p></li>
      </ul>
      <div className="changeMyaccount">
        <Link className='linkBtn' to='/myaccount/edit'><i className="fa-solid fa-pen-to-square fa-size icon_deco "></i></Link>
        {/* <a className='linkBtn'><i className="fa-solid fa-trash-alt fa-size icon_deco "></i></a> */}
        {/* I don't want to they delete account */}
      </div>
    </section >
  )
}
