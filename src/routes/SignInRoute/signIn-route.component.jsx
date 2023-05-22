import { Routes, Route } from 'react-router-dom';
import SignIn from '../../components/SignIn/signIn.component';
import SignUp from '../../components/SignUp/signUp.component';


const SignInRoute = () => {
    return (
        <Routes>
            <Route index element={<SignIn />} />
            <Route path=':sign-up' element={<SignUp />} />
        </Routes>
    )
}

export default SignInRoute;