import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
}

export default function Register() {
  const [values, setValues] = useState(initialState)
  // gloval state and useNavigate

  function toggleMember() {
    setValues({ ...values, isMember: !values.isMember })
  }

  function onChange(e) {
    console.log(e.target)
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {/* name input */}
        {values.isMember || (
          <FormRow
            value={values.name}
            type='text'
            name='name'
            labelText='name'
            onChange={onChange}
          />
        )}
        {/* email input */}
        <FormRow
          value={values.email}
          type='text'
          name='email'
          labelText='email'
          onChange={onChange}
        />
        {/* password input */}
        <FormRow
          value={values.password}
          type='password'
          name='password'
          labelText='password'
          onChange={onChange}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
