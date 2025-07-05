import React, { useRef, useState } from "react";
import Header from "./Header";
import bgImage from "../assets/images/netflix-background.jpg";
import validate from "../utils/validate";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const confirmPassword = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInForm = (source) => {
    setErrorMsg(null);
    source === "signUp" ? setIsSignInForm(false) : setIsSignInForm(true);
  };

  const handleFormValidation = (event) => {
    event.preventDefault();
    const validationResult = validate(
      name?.current?.value,
      email.current.value,
      password.current.value,
      confirmPassword?.current?.value
    );
    setErrorMsg(validationResult);
    if (validationResult !== null) {
      return;
    }

    if (!isSignInForm) {
      // register
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName, accessToken } = user;
              dispatch(addUser({ uid, email, displayName, accessToken }));
            })
            .catch((error) => {
              console.log(error.message);
            });
          const user = userCredential.user;
          console.log(user.uid);
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMsg(error.code + " - " + error.message);
        });
    } else {
      // login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("login: " + user.uid);
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMsg(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgImage} alt="background-logo" />
      </div>
      <div className="absolute bg-black w-full mx-auto max-w-[480px] right-0 left-0 my-36 bg-opacity-80 p-6">
        <form className="p-3 m-3">
          <h1 className="text-white text-2xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              className="p-3 mt-6 rounded-md w-full bg-transparent text-white placeholder-gray-400 border border-gray-500"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            type="text"
            className="p-3 mt-6 rounded-md w-full bg-transparent text-white placeholder-gray-400 border border-gray-500"
            placeholder="Email address"
          />
          <input
            ref={password}
            type="password"
            className="p-3 mt-6 rounded-md w-full bg-transparent text-white placeholder-gray-400 border border-gray-500"
            placeholder="Password"
          />
          {!isSignInForm && (
            <input
              ref={confirmPassword}
              type="password"
              className="p-3 mt-6 rounded-md w-full bg-transparent text-white placeholder-gray-400 border border-gray-500"
              placeholder="Confirm password"
            />
          )}
          <button
            type="submit"
            className="p-2 mt-7 mb-3 bg-red-600 rounded-md w-full"
            onClick={handleFormValidation}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-500 text-lg font-semibold">{errorMsg}</p>
          {isSignInForm ? (
            <p className="text-gray-300 mt-2">
              New to Netflix?
              <strong
                className="cursor-pointer text-white hover:underline"
                onClick={() => handleSignInForm("signUp")}
              >
                Sign up now
              </strong>
            </p>
          ) : (
            <strong
              className="text-white cursor-pointer hover:underline"
              onClick={() => handleSignInForm("signIn")}
            >
              Sign In
            </strong>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
