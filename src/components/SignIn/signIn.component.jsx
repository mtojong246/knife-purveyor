import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import './signIn.styles.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();

        } catch(error) {
            if(error.code === 'auth/wrong-password') {
                alert("Sorry, wrong email or password.")
            } else if(error.code === 'auth/user-not-found') {
                alert("Sorry, email does not exist.")
            } else {
                alert('error signing in user')
            }
        }
    }
    
    const handleChange = (event) => {
        const { name, value } = event.target; 

        setFormFields({...formFields, [name]: value})
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    return (
        <div className='signin'>
            <div className='signin-container'>
                <span>Sign In</span>
                <form className='signin-form' id='sign-in-form' onSubmit={handleSubmit}>
                    <input required type='email' placeholder='Email address' name='email' value={email} onChange={handleChange}/>
                    <input required type='password' placeholder='Password' name='password' value={password} onChange={handleChange}/>
                </form>
                <br />
                <div className='signin-button-container'>
                    <button className='signin-button' type='submit' form='sign-in-form'>Log in</button>
                    <button className='google-button' type='button' onClick={logGoogleUser}>Google Sign in</button>
                </div>
                <p>Don't have an account? <Link to='/sign-in/sign-up'>Sign up!</Link></p>
                <p>Forgot password?</p>
            </div>
        </div>
    )
}

export default SignIn;