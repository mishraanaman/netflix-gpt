import React, {useState, useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const toggleSignIn = ()=>{
        setIsSignInForm(!isSignInForm)
    }
    
    const handleButtonClick=()=>{
        //Validation is present in Validate.js
       const validData = checkValidData(email.current.value, password.current.value)
       setErrorMessage(validData);
    }
    return (
        <div>
        <div><Header />
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
    />
            Login</div>
              <form onSubmit={(e)=>e.preventDefault()} className='w-1/4 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
                <h1 className='text-3xl font-bold py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input type="text" and placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>}
                <input ref={email} type="text" and placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700'/>
                <input ref={password} type="password" and placeholder='Password' className='p-2 my-4 w-full bg-gray-700'/>
                <p className='py-4 text-red-600 font-bold'>{errorMessage}</p>
                <button className='p-2 my-6 bg-red-600 w-full' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className='py-4 cursor-pointer'onClick={toggleSignIn}>{isSignInForm? checkValidData:null}</p>
              </form>
              </div>
    )
}

export default Login