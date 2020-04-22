import React from 'react'

export default function Form (props) {
const {
  values,
  onInputChange,
  onCheckboxChange,
  onSubmit,
  errors
} = props

return(
  <form className='form-class'>
    <h2>New User Form</h2>
    <div className='errors'>
      {errors.username}
      {errors.email}
      {errors.password}
    </div>


      <label>Username:&nbsp;
      <input
        value={values.username}
        onChange={onInputChange}
        name='username'
        type='text'
      /></label>

      <label>Email:&nbsp;
      <input
        value={values.email}
        onChange={onInputChange}
        name='email'
        type='text'
      /></label>

      <label>Password:&nbsp;
      <input
        value={values.password}
        onChange={onInputChange}
        name='password'
        type='text'
      /></label>

      <label>Terms of Service
      <input
        checked={values.terms}
        onChange={onCheckboxChange}
        name='terms'
        type='checkbox'
      /></label>


      <button className='button' onClick={onSubmit}>submit</button>

  </form>
)




}


// We want to create a form to onboard a new user to our system.
// We need at least the following pieces of information about our
// new user:
//
//  Name
//  Email
//  Password
//  Terms of Service (checkbox)
//  A Submit button to send our form data to the server.
