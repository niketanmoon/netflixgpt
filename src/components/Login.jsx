import Header from "./Header";
import LoginBackgroundImage from "../assets/loginBackground.jpg";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LoginBackgroundImage} alt="Image Background" />
      </div>
      <form className="absolute p-12 bg-black/70 w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" type="submit">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
