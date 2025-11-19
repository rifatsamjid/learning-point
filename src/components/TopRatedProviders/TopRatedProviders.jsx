import React, { useEffect, useState } from "react";
import Card from "../../page/Card";
import "animate.css";

const TopRatedProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("/data.json") 
      .then((res) => res.json())
      .then((data) => {
        
        const topRated = data.sort((a, b) => b.rating - a.rating).slice(0, 3);
        setProviders(topRated);
      });
  }, []);

  return (
    <section className="py-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate__animated animate__fadeInDown">
        Top Rated Providers
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map((item, index) => (
          <div
            key={item.skillId}
            className={`animate__animated animate__fadeInUp animate__delay-${
              index + 1
            }s`}
          >
            <div className="bg-base-200 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-60">
                <img
                  src={item.image}
                  alt={item.skillName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-yellow-400 text-white font-bold px-3 py-1 rounded-full shadow-lg">
                  ⭐ {item.rating}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between h-56">
                <h3 className="text-xl font-bold mb-2 text-gray-300">
                  {item.skillName}
                </h3>
                <p className="text-gray-600 text-sm flex-1">
                  {item.description.slice(0, 100)}...
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">
                    ${item.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;
