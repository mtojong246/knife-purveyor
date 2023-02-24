import './signUp.styles.css';

const SignUp = () => {

    return (
        <div className='signup'>
            <div className='signup-container'>
                <span>Register</span>
                <form>
                    <input type='text' placeholder='Display Name' />
                    <input type='email' placeholder='Email address' /> 
                    <input type='password' placeholder='Password' />
                    <input type='password' placeholder='Confirm Password' />
                </form>
            </div>
            <div className='signup-newsletter'>
                <span>Sign up to our Newsletter</span>
                <br />
                <input type='checkbox' /><p className='email-correspondence'>I agree to receive email correspondence from Knifepurveyor.com</p> 
            </div>
            <button type='button'>Sign Up</button>
        </div>
    )
}

export default SignUp; 