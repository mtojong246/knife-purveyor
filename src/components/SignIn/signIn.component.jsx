import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import './signIn.styles.css';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className='signin'>
            <div className='signin-container'>
                <span>Sign In</span>
                <form>
                    <input type='email' placeholder='Username or email address' />
                    <input type='password' placeholder='Password' />
                </form>
                <p>Remember me</p>
                <button type='button'>Log in</button>
                <button type='button' onClick={logGoogleUser}>Google Sign in</button>
                <p>Don't have an account? <Link to='/sign-in/sign-up'>Sign up!</Link></p>
                <p>Forgot password?</p>
            </div>
        </div>
    )
}

export default SignIn;