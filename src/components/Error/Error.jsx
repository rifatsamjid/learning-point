import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center text-white bg-gray-900">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found </p>
      <Link
        to="/"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
