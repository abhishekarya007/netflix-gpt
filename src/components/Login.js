import { useRef, useState } from "react";
import Header from "./Header";
import handleValidate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [message, setMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleOnValidate = () => {
    const message = handleValidate(email.current.value, password.current.value);
    setMessage(message);

    if (message) return;

    if (isSignIn) {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setMessage(error.message);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setMessage(error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-background"
      ></img>
      <form
        onSubmit={(ev) => ev.preventDefault()}
        className="absolute flex flex-col gap-4 w-3/12 bg-black opacity-90 p-10 rounded-md my-44 mx-auto left-0 right-0"
      >
        <div className="text-white text-3xl mb-2 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
        {!isSignIn && (
          <input
            ref={name}
            className="px-4 py-2 rounded text-base bg-gray-800 text-white"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="px-4 py-2 rounded text-base bg-gray-800 text-white"
          type="text"
          placeholder="Email address"
        ></input>
        <input
          ref={password}
          className="px-4 py-2 rounded text-base bg-gray-800 text-white"
          type="password"
          placeholder="Password"
        ></input>
        <div className="text-red-700 text-xs font-bold">{message}</div>

        <button
          className="bg-red-700 text-white text-base p-2 rounded"
          onClick={handleOnValidate}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between text-white text-xs">
          <div>Remember Me</div>
          <div>Need help?</div>
        </div>
        {/* <div> */}
        <div className="text-gray-500 text-sm">
          {isSignIn ? "New to netflix ?" : "Already a user ?"}{" "}
          <span
            className="text-white text-sm cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign up now" : "Sign in now"}
          </span>
        </div>
        {/* <div className='text-xs text-white'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-950'>Learn more.</span></div> */}
        {/* </div> */}
      </form>
    </div>
  );
};

export default Login;
