import React from 'react'
import { useSelector } from 'react-redux'
import MyAccount from './MyAccount'
import Registeration from './Registration'

export default function Login () {
  const user = useSelector(state => state.user)
  return (
    <div>
      {
        user.id
          ? (<MyAccount user={user} />)
          : (<Registeration user={user} />)
      }
    </div>
  )
}
