import React from 'react'
import { useNavigate } from 'react-router-dom'
import addUser from '../apis/registerationApi'
import { useAuth0 } from '@auth0/auth0-react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Sorry it\'s Required')
})

export default function Register () {
  const authUser = useAuth0().user
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
      description: ''
    },
    onSubmit: values => {
      addUser(values, authUser, navigate)
    },
    validationSchema: registerSchema
  })

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? <p className='inputError'>{formik.errors[inputName]}</p>
      : null
  }

  return (
    <section className='flex-myaccountContainer'>
      <h2>Register Your Account</h2>

      <form onSubmit={formik.handleSubmit} className='register_form'>
        <div className="field input-tray">

          <label htmlFor='name' className='label'>Name</label>
          {showAnyErrors('name')}
          <input
            className='form-box'
            id='name'
            name='name'
            placeholder='Write Your Name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor='location' className='label'>Your Location (Suburb or City)</label>
          {showAnyErrors('location')}
          <input
            className='form-box'
            id='location'
            name='location'
            onChange={formik.handleChange}
            value={formik.values.location}
            placeholder='e.g. Auckland'
          />

          <label htmlFor='description' className='label'>Introduction</label>
          {showAnyErrors('description')}
          <textarea
            className='form-box form-textarea'
            id='description'
            name='description'
            onChange={formik.handleChange}
            value={formik.values.description}
            placeholder='Tell me a little bit about yourself'
          />

        </div>

        <button
          className='registerSubmit common-button'
          type='submit'
        >Register</button>

      </form>
    </section>

  )
}
