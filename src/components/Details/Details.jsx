import React, { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const Details = () => {
  const { skillId } = useParams();
  const data = useLoaderData();
  const [skill, setSkill] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });


  useEffect(() => {
    toast.dismiss();

    const foundSkill = data.find((item) => item.skillId === parseInt(skillId));
    setSkill(foundSkill);
  }, [skillId, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (!skill) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-base-300 shadow-lg rounded-2xl">
      <Toaster position="top-center" reverseOrder={false} />
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-64 object-cover rounded-xl"
      />

      <div className="mt-6 space-y-2">
        <h2 className="text-3xl font-bold ">{skill.skillName}</h2>
        <p className="">
          <strong>Provider:</strong> {skill.providerName} ({skill.providerEmail}
          )
        </p>
        <p >
          <strong>Category:</strong> {skill.category}
        </p>
        <p >
          <strong>Price:</strong> ${skill.price}
        </p>
        <p >
          <strong>Rating:</strong> {skill.rating}
        </p>
        <p >
          <strong>Slots Available:</strong> {skill.slotsAvailable}
        </p>
        <p className="0 mt-2">{skill.description}</p>
      </div>

      {/* Book Session Form */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-2xl font-semibold mb-4">
          Book Session
        </h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-base-200 p-6 rounded-xl"
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border border-gray-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block font-medium  mb-1">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Details;
