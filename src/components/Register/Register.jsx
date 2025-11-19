import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      toast.error("Password must contain an uppercase letter.");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      toast.error("Password must contain a lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      toast.error("Password too short!");
      return;
    }

    try {
      
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Account created successfully!");
      form.reset();
      navigate("/");  
      console.log("Registered User:", user);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Google Sign-In failed!");
    }
  };

  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card bg-base-300 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="font-bold text-center text-2xl mb-4">
              Register your account
            </h2>

            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
                required
              />

              {/* Photo */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Enter your photo url"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Enter your email"
                required
              />

              {/* Password with eye toggle */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input w-full pr-10"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              {/* Register Button */}
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              {/* Divider */}
              <div className="divider">OR</div>

              {/* Google Sign-In */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-secondary flex items-center justify-center gap-2"
              >
                <FaGoogle /> Continue with Google
              </button>

              {/* Login Redirect */}
              <p className="font-semibold mt-3 text-center">
                Already Have An Account?{" "}
                <Link to="/auth/login" className="text-secondary">
                  Login
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

export default Register;
