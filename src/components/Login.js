import React, { useState } from "react";
import Header from "./Header";
import bgImage from "../assets/images/netflix-background.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = (source) => {
    source === "signUp" ? setIsSignInForm(false) : setIsSignInForm(true);
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
              type="text"
              className="p-3 mt-6 rounded-md w-full bg-transparent text-white placeholder-gray-400 border border-gray-500"
              placeholder="Name"
            />
          )}
          <input
            type="text"
            className="p-3 mt-6 rounded-md w-full bg-transparent text-white placeholder-gray-400 border border-gray-500"
            placeholder="Email address"
          />
          <input
            type="password"
            className="p-3 mt-6 rounded-md w-full bg-transparent text-white placeholder-gray-400 border border-gray-500"
            placeholder="Password"
          />
          {!isSignInForm && (
            <input
              type="password"
              className="p-3 mt-6 rounded-md w-full bg-transparent text-white placeholder-gray-400 border border-gray-500"
              placeholder="Confirm password"
            />
          )}
          <button
            type="submit"
            className="p-2 my-7 bg-red-600 rounded-md w-full"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm ? (
            <p className="text-gray-300">
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
