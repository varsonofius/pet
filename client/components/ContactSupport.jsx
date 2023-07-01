import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactSupport (props) {
  // const [state, handleSubmit] = useForm('mayvjned')
  // const [state, handleSubmit] = useForm('mdobzglz')
  const [state, handleSubmit] = useForm('mknybbvp')
  const { handleCondition } = props

  if (state.succeeded) {
    return (
      <div className='contact-sent'>
        <p className="contact-sent-message">Your request has been sent to our management team.<br/>
      We will be in touch within 48 hours. </p>
      </div>
    )
  }
  return (

    <section className='helpdesk-Screen'>
      <img className='helpdesk-logo' src='/images/logo_petsitter_maincolor.png' alt='logoimg' />
      <h1 className='helpdesk-title'>Contact Support</h1>

      <form onSubmit={handleSubmit} className='flex-myaccountContainer'>
        <label htmlFor='name'><i className="fa-solid icon_deco fa-user"></i>Name</label>
        <input
          className='form-box'
          type='text'
          name='name'
          id='full-name'
          placeholder='Name' />
        <ValidationError
          prefix='name'
          field='name'
          errors={state.errors}
        />
        <label htmlFor='email'><i className="fa-solid icon_deco fa-envelope"></i>
      Email Address
        </label>
        <input
          id='email'
          type='email'
          name='email'
          className='form-box'
          placeholder='Email Address'
        />
        <ValidationError
          prefix='Email'
          field='email'
          errors={state.errors}
        />
        <label htmlFor='help'><i className="fa-solid icon_deco fa-circle-question"></i>How can we help?</label>
        <select className='helpdesk-dropdown' name='help' id='help' required=''>
          <option value="-1">--- Select Service ---</option>
          <option value="Pet Sitting">Pet Sitting</option>
          <option value="Pet Walking">Pet Walking</option>
          <option value="Pet Boarding">Pet Boarding</option>
          <option value="Pet Grooming">Pet Walking</option>
          <option value="account profile">Account \ Profiles</option>
          <option value="payment">Payments</option>
          <option value="feedback">Genaral Feedback \ Suggestions</option>
        </select>
        <label htmlFor='message'><i className="fa-solid icon_deco fa-message"></i>Message</label>
        <textarea
          className='form-textarea form-box'
          id='message'
          name='message'
          placeholder='Type your message here'
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <div className="contact-coloum">
          <button onClick={handleCondition} className='common-button opposit-button '>
      close
          </button>
          <button type='submit' className='common-button ' disabled={state.submitting}>
      Submit
          </button>
        </div>

      </form>

    </section>
  )
}
