import React, { useState } from "react";
import { useLocation } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "../NavBar/NavBar";

const ForgetPassword = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailFromLogin = queryParams.get("email") || "";

  const [email, setEmail] = useState(emailFromLogin);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset link sent to your email!");
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
        <nav>
            <NavBar></NavBar>
        </nav>
      <div className="flex items-center justify-center h-screen ">
        <Toaster position="top-center" />
        <div className="bg-base-300 shadow-lg rounded-xl p-8 w-96">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-400">
            Reset Your Password
          </h2>

          <form onSubmit={handleReset}>
            <label className="block mb-2 text-gray-400 font-medium">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
