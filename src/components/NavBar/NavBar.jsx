import React, { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import toast from "react-hot-toast";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
    } catch (err) {
      toast.error("Logout failed: " + err.message);
    }
  };

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      toast.error("Please log in to access your profile!");
      navigate("/auth/login");
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <button onClick={handleProfileClick}>Profile</button>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="bg-liner-to-r from-blue-500 to-indigo-600 p-2 rounded-lg text-white">
            <FaBookOpen className="text-xl" />
          </div>
          <h1 className="text-2xl font-bold">
            Learning<span className="text-blue-500">Point</span>
          </h1>
        </NavLink>
      </div>

      {/* Center Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <button onClick={handleProfileClick}>Profile</button>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end flex  items-center gap-3">
        {user ? (
          <div className="flex fle items-center gap-3">
            {user.photoURL && (
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
                />
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                  {user.displayName || "User"}
                </span>
              </div>
            )}
            <button onClick={handleLogout} className="btn btn-sm btn-neutral">
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/auth/login" className="btn btn-sm btn-primary">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
