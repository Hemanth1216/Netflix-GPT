import React from "react";
import netflixLogo from "../assets/images/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute px-5 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img className="w-44" src={netflixLogo} alt="netflix-logo" />
      {user && (
        <div className="flex gap-5 items-center">
          <h2 className="font-semibold text-lg">
            {`Hi ${user.displayName ? user.displayName : user.uid}`}
          </h2>
          <button
            className="px-3 rounded-md bg-red-500 h-[36px] text-black font-medium"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
