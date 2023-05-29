import './signin-dropdown.styles.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user-selectors';
import { signOutStart } from '../../store/user/user-actions';



const SignInDropdown = () => {
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signOutUser = () => dispatch(signOutStart());

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