import React, { useEffect } from "react";
import netflixLogo from "../assets/images/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, accessToken } = user;
        dispatch(addUser({ uid, email, displayName, accessToken }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute px-5 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img className="w-44" src={netflixLogo} alt="netflix-logo" />
      {user && (
        <div className="flex gap-5 items-center">
          {/* <h2 className="font-normal text-lg hover:font-bold hover">
            {`Hi ${user.displayName ? user.displayName : user.uid}`}
          </h2> */}
          <button
            className="px-3 rounded-md bg-red-400 bg-opacity-50 h-[36px] text-black font-medium hover:bg-red-500"
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
