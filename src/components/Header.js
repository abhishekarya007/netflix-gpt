import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between absolute bg-gradient-to-b from-black px-8 py-2 z-20 w-screen items-center">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      ></img>
      {user && (
        <div
          onClick={() => {
            dispatch(removeUser());
            navigate("/");
          }}
          className="bg-red-600 h-fit text-white text-sm font-bold p-2 rounded-lg cursor-pointer"
        >
          Sign Out
        </div>
      )}
    </div>
  );
};

export default Header;
