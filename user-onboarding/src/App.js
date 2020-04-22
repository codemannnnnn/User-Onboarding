import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'







const initialFormValues = {
  username: '',
  email: '',
  password: '',

}




function App() {
  const [user, setUser] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)



  const onSubmit = evt => {
    evt.preventDefault()
    const newFriend = {
    username: formValues.username,
    email: formValues.email,
    password: formValues.password,
  }
  }

  const onInputChange = evt =>{
    const name = evt.target.name
    const value = evt.target.value

  }

  const onCheckboxChange = evt =>{
    const {name} = evt.target
    const isChecked = evt.target.checked
  }
  return (
    <div className="App">
      <header className="App-header">
        inside header class
        <Form
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}

        />


      </header>
    </div>
  );
}

export default App;
