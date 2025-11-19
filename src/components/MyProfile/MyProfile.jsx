import React, { useState, useEffect } from "react";
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { useNavigate } from "react-router"; 
import toast from "react-hot-toast";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", image: "" });
  const navigate = useNavigate();

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setFormData({
          name: currentUser.displayName || "",
          image: currentUser.photoURL || "",
        });
      }
    });
    return () => unsubscribe();
  }, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: formData.name,
        photoURL: formData.image,
      });
      setUser({ ...auth.currentUser });
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    }
  };

 
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate("/auth/login"); 
    } catch (err) {
      toast.error("Logout failed: " + err.message);
    }
  };

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        Please log in to view your profile.
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-base-200 shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover"
          />
        </div>

        {/* User Info */}
        {!isEditing ? (
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              {user.displayName}
            </h1>
            <p className="text-gray-300">{user.email}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label className="block text-gray-300 mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Image URL:</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition w-full"
            >
              Submit
            </button>
          </form>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          {!isEditing ? (
            <button
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition"
              onClick={() => setIsEditing(true)}
            >
              Update Profile
            </button>
          ) : (
            <button
              className="bg-gray-400 text-white px-6 py-2 rounded-full hover:bg-gray-500 transition"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          )}

          {/* 🔹 Logout Button */}
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
