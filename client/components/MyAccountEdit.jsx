import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { updateUser } from '../apis/registerationApi'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Sorry it\'s Required'),
  location: Yup.string()
    .required('Sorry it\'s Required'),
  description: Yup.string()
    .min(10)
    .required('Sorry it\'s Required')
})

export default function MyAccountEdit () {
  const state = useSelector(state => state.user)

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
      description: ''
    },
    onSubmit: values => {
      updateUser(values, state, navigate)
    },
    validationSchema: registerSchema,
    enableReinitialize: true
  })

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? <p className='inputError'>{formik.errors[inputName]}</p>
      : null
  }

  return (
    <section className='flex-myaccountContainer'>
      <h1>Edit My Account</h1>
      <form onSubmit={formik.handleSubmit} className='register_form'>
        <div className="field input-tray">

          <label htmlFor='name' className='label'>Name</label>
          {showAnyErrors('name')}
          <input
            className='form-box'
            id='name'
            name='name'
            placeholder={state.name}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor='location' className='label'>Your Location (Suburb or City)</label>
          {showAnyErrors('location')}
          <input
            className='form-box'
            id='location'
            name='location'
            placeholder={state.location}
            onChange={formik.handleChange}
            value={formik.values.location}
          />

          <label htmlFor='description' className='label'>Tell Me About Yourself</label>
          {showAnyErrors('description')}
          <textarea
            className='form-box form-textarea'
            id='description'
            name='description'
            placeholder={state.description}
            onChange={formik.handleChange}
            value={formik.values.description}
          />

        </div>
        <div className='Editbuttons'>
          <Link to='/myaccount' className='Editbuttons-link'
          ><button
              className='common-button opposit-button'
            >Back</button></Link>
          <button
            className='common-button '
            type='submit'
          >Submit</button>
        </div>

      </form>
    </section>
  )
}
