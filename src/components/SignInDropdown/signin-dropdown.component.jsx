import './signin-dropdown.styles.css';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const SignInDropdown = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const goToSignIn = () => {
        navigate('./sign-in')
    }

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <div className='sign-in-dropdown-container'>
        {currentUser ? (
            <button onClick={signOutHandler}>Sign Out</button>
        ) : (
            <button onClick={goToSignIn}>Sign In</button>
        )}
        </div>
    )
}

export default SignInDropdown;