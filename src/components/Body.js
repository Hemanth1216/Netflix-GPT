import React, { useEffect } from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, accessToken } = user;
        dispatch(addUser({ uid, email, displayName, accessToken }));
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default Body;
