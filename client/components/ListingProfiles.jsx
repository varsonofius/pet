import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListingProfilesItem } from './ListingProfilesItem'
import { getListing } from '../apis/listings'

export default function ListingProfiles (props) {
  const { id } = useParams()
  const [listingprofile, setListingProfile] = useState({})

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

  return (
    <>
      <ListingProfilesItem
        listingProfile={listingprofile}
      />
    </>

  )
}
