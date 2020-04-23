import React from 'react'

function UserForm(props){
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props
    console.log(values.terms.agree)
    return (
        <form className='form-class'>
            <h2>Please Fill Out the Form</h2>

            <div className='errors'>
                <p>{errors.name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.terms}</p>
            </div>

            <label>Name: &nbsp;
            <input
            data-cy_username_input="cy_username_input"
                value={values.name}
                onChange={onInputChange}
                name='name'
                type='text'
                /></label>

            <label>Email: &nbsp;
            <input
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='text'
                /></label>

                <label>Password: &nbsp;
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                    /></label>

            <label> Terms of Service <input
                value={values.terms}
                onChange={onCheckboxChange}
                name='agree'
                type='checkbox' />
                </label>


            <button className='formButton' onClick={onSubmit} disabled={disabled}>SUBMIT</button>

        </form>
    )
}

export default UserForm
