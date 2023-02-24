import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import './signIn.styles.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SignIn = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className='signin'>
            <div className='signin-container'>
                <span>Sign In</span>
                <form className='signin-form'>
                    <input type='email' placeholder='Email address' />
                    <input type='password' placeholder='Password' />
                </form>
                <input type='checkbox' /><p className='remember-me'>Remember me</p>
                <br />
                <div className='signin-button-container'>
                    <button type='button'>Log in</button>
                    <button type='button' onClick={logGoogleUser}>Google Sign in</button>
                </div>
                <p>Don't have an account? <Link to='/sign-in/sign-up'>Sign up!</Link></p>
                <p>Forgot password?</p>
            </div>
        </div>
    )
}

export default SignIn;