import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toggleGptSearch } from "../utils/gptSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGptSearch = useSelector((store) => store.gpt.isGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex justify-between absolute bg-gradient-to-b from-black px-8 py-2 z-20 w-screen items-center">
      <img className="w-48" src={NETFLIX_LOGO} alt="netflix-logo"></img>
      {user && (
        <div>
          <span
            onClick={() => dispatch(toggleGptSearch())}
            className="bg-blue-500 h-fit text-white text-sm font-bold p-2 rounded-lg cursor-pointer mr-2"
          >
            {isGptSearch ? "Home" : "Gpt Search"}
          </span>
          <span
            onClick={handleSignOut}
            className="bg-red-600 h-fit text-white text-sm font-bold p-2 rounded-lg cursor-pointer"
          >
            Sign Out
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
