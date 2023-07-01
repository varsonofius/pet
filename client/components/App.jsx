import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Routes, Route, useNavigate } from 'react-router-dom'

// 🎈components linked
import Nav from './Nav'
import Main from './Main'
import PetsitterForm from './PetsitterForm'
import ListingProfiles from './ListingProfiles'
// import Registration from './Registration'
import Listings from './Listings'
import Login from './Login'
import WaitIndicator from './WaitIndicator'
import MyAccountEdit from './MyAccountEdit'
import Helpdesk from './Helpdesk'
import ContactBtn from './ContactBtn'
import ListingsItemEdit from './ListingsItemEdit'
import AboutUs from './AboutUs'
import Footer from './Footer'

export default function App () {
  const navigate = useNavigate()
  cacheUser(useAuth0, navigate)
  return (
    <>
      <div className='app'>
        <Nav />
        <WaitIndicator />
        <ContactBtn />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Login />} />
          <Route path='/myaccount' element={<Login />} />
          <Route path='/myaccount/edit' element={<MyAccountEdit />} />
          <Route path='/petsitters' element={<Listings />} />
          <Route path='/petsitters/add' element={<PetsitterForm />} />
          <Route path='/petsitters/edit/:id' element={<ListingsItemEdit />} />
          <Route path='/petsitters/profiles/:id' element={<ListingProfiles />} />
          <Route path='/faq' element={<Helpdesk />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
