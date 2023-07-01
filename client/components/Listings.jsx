import { Link } from 'react-router-dom'
import ListingsItem from './ListingsItem'
import React, { useEffect, useState } from 'react'
import { getListing } from '../apis/listings'
import { useDispatch, useSelector } from 'react-redux'
import { deleteListingFromList } from '../actions/listings'

function Listings () {
  const dispatch = useDispatch()

  // << Using useState >>
  const [listings, setListings] = useState([])

  const token = useSelector(state => state.user.token)

  const [search, setSearch] = useState('')

  const [dropdownLists, setDropdownLists] = useState({
    service: '-1',
    pet: '-1'
  })

  useEffect(() => {
    getListing()
      .then(apiResponse => {
        setListings(apiResponse)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [dropdownLists])

  function deleteFromList (id) {
    dispatch(deleteListingFromList(id, token))
    getListing()
      .then(apiResponse => {
        setListings(apiResponse)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }

  // << this is for select service and pet type >>
  function setSelectPetBar (event) {
    setDropdownLists({
      ...dropdownLists,
      [event.target.name]: event.target.value

    })
  }

  // << this is for location search bar >>
  function handleChange (event) {
    const searchTerm = event.target.value
    setSearch(searchTerm)
  }

  function handleSubmit (event) {
    event.preventDefault()

    getListing(search)
      .then(listings => {
        const filterdata = listings.filter(listing => listing.location.toLowerCase().includes(search.toLowerCase()) && listing.pet_type === dropdownLists.pet && listing.service_rate.toLowerCase().includes(dropdownLists.service.toLowerCase()))
        setListings(filterdata)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <>
      <div className="listing-image">
        <img src="/images/listing-top.jpeg" alt="" />
        <div className="listing-top">
          <div>
            <p>I am looking for</p>
            <div className="listing-button">
              <select onChange={setSelectPetBar} value={dropdownLists.service} name="service" className ="select-pet">
                <option value="-1">--- Select Service ---</option>
                <option value="Pet Sitting">Pet Sitting</option>
                <option value="Pet Walking">Pet Walking</option>
                <option value="Pet Boarding">Pet Boarding</option>
                <option value="Pet Grooming">Pet Walking</option>
              </select>
            </div>
            <div>
              <p>My pet type</p>
              <select onChange={setSelectPetBar} value={dropdownLists.pet} name="pet" className ="select-pet">
                <option value="-1">--- Select Pet Type ---</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Guinea pig">Guinea pig</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Sheep">Sheep</option>
              </select>
            </div>
            <div>
              <p>My location</p>
              <div className="wrap">
                <div className="searchbar-button">
                  <input
                    onChange={handleChange}
                    value={search}
                    type="text"
                    id='searchValue'
                    className="searchbar"
                    placeholder='Suburb or City'
                    name='searchValue'></input>
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="searchButton">
                  <i className="fa fa-search"></i>Search
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="linkto-add-profile">
        <h3>Would you like to be a petsitter?</h3>
        <p>Please click here to post your profile!</p>
        <Link to='/petsitters/add' className="button-linktoaddprofile">Add to listing</Link>
      </div>
      {/* display all lists */}
      { listings.map((listing) => {
        return <>
          <ListingsItem listing={listing} deleteFromList={deleteFromList}/>
        </>
      })}
    </>

  )
}

export default Listings
