import React, { useState, useEffect } from 'react'
import { getListing, updateListing } from '../apis/listings'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

export default function ListingsItemEdit () {
  const navigate = useNavigate()
  const { id } = useParams()
  const state = useSelector(state => state.user)
  const [listingprofile, setListingProfile] = useState({
    availability: '',
    description: '',
    home_type: '',
    location: '',
    name: '',
    pet_number: '',
    pet_size: '',
    pet_type: '',
    promo_listing: '',
    service_rate: '',
    img: ''
  })

  useEffect(() => {
    getListing()
      .then(apiResponse => {
        setListingProfile(apiResponse.find(obj => obj.id === Number(id))) // find only the one that matches
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const formik = useFormik({
    initialValues: {
      availability: listingprofile.availability,
      description: listingprofile.description,
      home_type: listingprofile.home_type,
      location: listingprofile.location,
      name: listingprofile.name,
      pet_number: listingprofile.pet_number,
      pet_size: listingprofile.pet_size,
      pet_type: listingprofile.pet_type,
      promo_listing: listingprofile.promo_listing,
      service_rate: listingprofile.service_rate,
      img: listingprofile.img
    },
    enableReinitialize: true,
    onSubmit: values => {
      updateListing(id, values, state, navigate)
    }
  })

  return (
    <div>
      <h1>Petsitter editing form</h1>
      <h5>Edit your listing below:</h5>
      <form className='form' onSubmit={formik.handleSubmit} >
        <p className='label'> Name:</p>
        <input name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className='form-box'/>

        <p> Location:</p>
        <input name="location"
          onChange={formik.handleChange}
          value={formik.values.location}
          className='form-box'
        />

        <p> Amount of pets I can look after at one time:</p>
        <input name="pet_number"
          onChange={formik.handleChange}
          value={formik.values.pet_number}
          className='form-box'
        />

        <p> Pet Type:</p>
        <input name="pet_type"
          onChange={formik.handleChange}
          value={formik.values.pet_type}
          className='form-box'
        />

        <p> Pet sizes:</p>
        <input name="pet_size"
          onChange={formik.handleChange}
          value={formik.values.pet_size}
          className='form-box'
        />

        <p> Home Type:</p>
        <input name="home_type"
          onChange={formik.handleChange}
          value={formik.values.home_type}
          className='form-box'
        />

        <p> Picture URL:</p>
        <input name="img"
          onChange={formik.handleChange}
          value={formik.values.img}
          className='form-box'
        />

        <p> Availability: <a title="Write down the days you think you'll be available. This can be further discussed when the client makes an inquiry"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a></p>
        <input name="availability"
          onChange={formik.handleChange}
          value={formik.values.availability}
          className='form-box'
        />

        <p> Service and Rates:</p>
        <select id="service_rate"
          name="service_rate"
          onChange={formik.handleChange}
          className='form-box'
          value={formik.values.service_rate}
        >
          <option value="-1">--- Select Service ---</option>
          <option name="serviceRate1">Pet Sitting - $15 per hour</option>
          <option name="serviceRate2">Pet Boarding - $40 per day</option>
          <option name="serviceRate3">Pet Grooming - discuss with pet sitter</option>
          <option name="serviceRate4">Pet Walking - $10 per hour</option>
        </select>

        <p> Description: <a title="Write a few sentences about who you are to attract potential clients!"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a></p>
        <textarea name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          className='form-box form-textarea form-font'
        />

        <p> Promotion listing: <a title="A sentence or two to grab your potential client's attention! This text that will show up in on the listings page"><img src="https://i.ibb.co/smSqZXF/Screen-Shot-2022-02-25-at-3-02-05-PM.png" height="14px"/></a></p>

        <textarea name="promo_listing"
          onChange={formik.handleChange}
          value={formik.values.promo_listing}
          className='form-box form-textarea form-font '
        />

        <button
          className='common-button'
          type='submit'
        >Submit</button>

      </form>
    </div>
  )
}
