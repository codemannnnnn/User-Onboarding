import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'

import axios from 'axios'
import * as yup from 'yup'

const url = 'https://reqres.in/api/users'



// Form validation is one of the facets of an application
// that makes it feel polished and controlled from a user
// perspective. With that in mind, implement the following:
//
//  Using Yup, set up at least two different validations
//  along with custom error messages that will display on
//  screen when validation fails.



const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,

}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'username must have at least 3 characters!')
    .required('username is required!'),
  email: yup
    .string()
    .email('a VALID email is required')
    .required('email is required'),
  password: yup
    .string()
    .min(3, 'username must have at least 3 characters!')
    .required('civil status is required'),
})




function App() {
  const [friends, setFriends] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getFriends = () => {
      // 🔥 STEP 3 - WE NEED TO FETCH FRIENDS FROM THE API!
      // and set them in state
      axios.get(url)
        .then(res => {
          setFriends(res.data)
        })
        .catch(err => {
          debugger
        })
    }

    useEffect(() => {
      // 🔥 STEP 4 - AFTER THE FIRST DOM SURGERY WE NEED FRIENDS FROM API!
      getFriends()
    }, [])

    const postFriend = friend => { // minus id
        // 🔥 STEP 5 - WE NEED A FUNCTION TO POST A NEW FRIEND TO THE API!
        // and set the updated list of friends in state
        // the endpoint responds (on success) with the new friend (with id !!)
        axios.post(url, friend)
          .then(res => {
            setFriends([...friends, res.data])
          })
          .catch(err => {

          })

      }



  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [formValues])



axios.get(url)
  .then(res => {
    console.log(res)
  })



//handlers
  const onSubmit = evt => {
    evt.preventDefault()
    const newFriend = {
    username: formValues.username,
    email: formValues.email,
    password: formValues.password,
  }
  postFriend(newFriend)
    setFormValues(initialFormValues)
  }

  const onInputChange = evt =>{
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        // yoohoo, validates :)
        // CLEAR ERROR
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        // dangit, does not validate :(
        // SET THE ERROR IN THE RIGHT PLACE
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt =>{
    const { name } = evt.target
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      [name]: isChecked,
    })
  }

  return (
    <div className="App">
      <header className="App-header">

        <Form

          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          errors={formErrors}

        />


      </header>
    </div>
  );
}

export default App;
