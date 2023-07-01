import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ListingsItem (props) {
  const listing = props.listing
  const { id, img } = props.listing
  const auth0Id = useSelector(state => state.user.auth0Id)

  function deleteFromList () {
    props.deleteFromList(id)
  }

  return (
    <>
      <div className="lists-all">
        <div className="lists-left">
          { img === null
            ? <img className="lists-profile-pic lists-profile-pic-default" src='/images/logo_petsitter_maincolor500.png' />
            : <img className="lists-profile-pic" src={img} />}

        </div>

        <ul className="lists-right">
          <li>
            <h3>{listing.name}</h3>
            <ul className="lists-ul-item">
              <li><i className="fa-solid fa-location-dot"></i><span className="profile-span">Location:</span>  {listing.location}</li>
              <li><i className="fa-solid fa-bone"></i><span className="profile-span">Pet type:</span>  {listing.pet_type}</li>
              <li><i className="fa-solid fa-money-check-dollar"></i><span className="profile-span">Service rate:</span>  {listing.service_rate}</li>
              <li><i className="fa-solid fa-clock"></i><span className="profile-span">Availability:</span>  {listing.availability}</li>
              <li><i className="fa-solid fa-hand-holding-heart"></i><span className="profile-span">About me:</span>  {listing.promo_listing}</li>
            </ul>
            <Link to={`/petsitters/profiles/${listing.id}`} className="button-orange button-checkprofile">Check profile</Link>
          </li>
        </ul>

        {/* Delete botton */}
        {listing.auth0_id === auth0Id && <a onClick={deleteFromList}><i className="fa-solid fa-trash-alt fa-size"></i></a>}
        {/* {listing.auth0_id === auth0Id && <a onClick={deleteFromList}><i className="fa-solid fa-trash-alt fa-size"></i></a>} */}
        {/* Edit botton */}
        {listing.auth0_id === auth0Id && <Link to={`/petsitters/edit/${listing.id}`}><i className="fa-solid fa-pen-to-square fa-size"></i></Link>}
      </div>
    </>
  )
}

export default ListingsItem
