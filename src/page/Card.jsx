import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config"; 
import toast from "react-hot-toast";

const Card = ({ item }) => {
  const { skillName, image, rating, price, skillId } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);


  const handleViewDetails = () => {
    if (user) {

      navigate(`/details/${skillId}`);
    } else {

      toast.error("Please log in to view details!");
      navigate("/auth/login", {
        state: { from: location.pathname, skillId: skillId },
      });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={skillName} className="w-full h-56 object-cover" />

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{skillName}</h2>

        <p className="text-gray-600 font-medium">
          ⭐ Rating: <span className="text-yellow-500">{rating}</span>
        </p>

        <p className="text-gray-800 font-bold">💲 Price: ${price}</p>

        <button
          onClick={handleViewDetails}
          className="w-full bg-blue-600 text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
