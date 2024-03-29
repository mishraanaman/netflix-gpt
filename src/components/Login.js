import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { profile,bg_url } from "../utils/Constant";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:profile,
          })
            .then(() => {
              const { email, uid, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse")
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {

          const user = userCredential.user;
          navigate("/browse")

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div style={{backgroundImage: `url(${bg_url})`}}
        className="px-12 xs:px-5 py-4 xs:py-3 bg-blend-multiply bg-black bg-opacity-50 flex items-center justify-center bg-cover bg-center h-screen"
      >
        <div className="w-full max-w-sm	 bg-black px-16 xs:px-12 sm:py-10 py-12 bg-opacity-70 rounded">
          <h1 className="text-3xl text-white font-medium mb-8 xs:mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <p className="text-red-600 text-sm font-medium mb-3">
              {errorMessage}
            </p>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="mb-8 px-4 py-3 rounded focus:outline-none"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="mb-8 px-4 py-3 rounded focus:outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="mb-8 px-4 py-3 rounded focus:outline-none"
            />

            <button
              onClick={handleButtonClick}
              className=" bg-red-600 text-white px-4 py-3 rounded font-medium text-base"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p
            className="text-white font-normal text-xs mt-3 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already Registerd? Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;