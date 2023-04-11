import './signUp.styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Sorry, passwords do not match.');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});

            resetFormFields();

        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use.')
            } else {
                alert('error creating user')
            }
        }
    }
    
    const handleChange = (event) => {
        const { name, value } = event.target; 

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='signup'>
            <div className='signup-container'>
                <span>Register</span>
                <form id='signup-form' onSubmit={handleSubmit}>
                    <div className='form'>
                        <input required type='text' placeholder='Display Name' name='displayName' value={displayName} onChange={handleChange}/>
                        <input required type='email' placeholder='Email address' name='email' value={email} onChange={handleChange} /> 
                        <input required type='password' placeholder='Password' name='password' value={password} onChange={handleChange} />
                        <input required type='password' placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={handleChange} />
                    </div>
                </form>
            </div>
            <div className='signup-newsletter'>
                <span>Sign up to our Newsletter</span>
                <br />
                <input type='checkbox' /><p className='email-correspondence'>I agree to receive email correspondence from Knifepurveyor.com</p> 
            </div>
            <div className='signup-button-container'>
                <Link to='/sign-in'><button type='button'>Back</button></Link>
                <button type='submit' form='signup-form'>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp; 