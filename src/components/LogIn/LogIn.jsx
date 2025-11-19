import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";
  const skillId = location.state?.skillId;
  const togglePassword = () => setShowPassword(!showPassword);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      toast.success(`Welcome, ${user.displayName || "User"}!`);
      console.log("Google Logged In:", user);

      setTimeout(() => {
        if (skillId) {
          navigate(`/details/${skillId}`);
        } else {
          navigate(from);
        }
      }, 1000);
    } catch (err) {
      console.error("Google Login Error:", err.message);
      toast.error("Google Login Failed: " + err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      toast.success("Login Successful!");
      console.log("Logged in user:", user);

      setTimeout(() => {
        if (skillId) {
          navigate(`/details/${skillId}`);
        } else {
          navigate(from);
        }
      }, 1000);
    } catch (err) {
      console.error("Login Error:", err.message);
      setError("Invalid email or password. Please try again.");
      toast.error("Login failed: " + err.message);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <NavBar />
      </nav>

      {/* Login Form */}
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card bg-base-300 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="font-bold text-center text-2xl">
              Login to Your Account
            </h2>

            <fieldset className="fieldset relative">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Password */}
              <label className="label mt-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full pr-10"
                  placeholder="Enter your password"
                  required
                />
                <span
                  onClick={togglePassword}
                  className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700 transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}

              {/* Forgot Password */}
              <div className="mt-2">
                <Link
                  to={`/auth/login/forget?email=${encodeURIComponent(email)}`}
                  className="link link-hover text-sm text-gray-500"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Login
              </button>

              <div className="divider">OR</div>
              {/* Google Login */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-primary mt-3 w-full flex items-center justify-center gap-2"
              >
                <FaGoogle />
                Continue with Google
              </button>

              {/* Register Link */}
              <p className="font-semibold mt-3 text-center text-sm">
                Don’t have an account?{" "}
                <Link to="/auth/register" className="text-secondary">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default LogIn;
