import React, { useState } from 'react'

import ContactSupport from './ContactSupport'
import FaQ from './FaQ'

export default function Helpdesk () {
  const [btnClick, setBtnClick] = useState(false)
  const [display, setDisplay] = useState('block')

  function handleOnclick () {
    setBtnClick(true)
    setDisplay('none')
  }

  function handleCondition () {
    setBtnClick(false)
    setDisplay('block')
  }

  return (
    <section className='helpdesk-Screen'>
      <img className='helpdesk-logo' src='/images/logo_petsitter_maincolor.png' alt='logoimg' />
      <h1 className='helpdesk-title'>Helpdesk</h1>
      {/* <div className='helpdesk-main'>
        <i className='fa-solid fa-magnifying-glass'></i>
        <input type="text" />
      </div> */}

      <FaQ />
      <button onClick={handleOnclick} style={{ display: display }} className='common-button helpdesk-button'>Contact Us</button>

      {
        btnClick
          ? <ContactSupport handleCondition={handleCondition} />
          : ''
      }

    </section>
  )
}
