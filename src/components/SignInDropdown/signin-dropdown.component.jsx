import './signin-dropdown.styles.css';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user-selectors';

const SignInDropdown = () => {
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate();

    const goToSignIn = () => {
        navigate('./sign-in')
    }


    return (
        <div className='sign-in-dropdown-container'>
        {currentUser ? (
            <button onClick={signOutUser}>Sign Out</button>
        ) : (
            <button onClick={goToSignIn}>Sign In</button>
        )}
        </div>
    )
}

export default SignInDropdown;