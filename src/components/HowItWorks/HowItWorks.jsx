import React from "react";
import { FaSearch, FaUserTie, FaStar } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch size={40} className="text-blue-600" />,
    title: "Find Your Skill",
    description:
      "Browse our platform to find the skill or course you want to learn. Filter by category, rating, or price to find the perfect match.",
  },
  {
    icon: <FaUserTie size={40} className="text-green-600" />,
    title: "Choose a Provider",
    description:
      "Select from top-rated providers with verified reviews. Learn more about their experience, teaching style, and availability.",
  },
  {
    icon: <FaStar size={40} className="text-yellow-500" />,
    title: "Start Learning",
    description:
      "Book a session or start a course online. Gain skills in a practical, hands-on way and track your progress with ease.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-base-300 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-5">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
