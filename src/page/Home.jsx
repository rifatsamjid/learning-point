import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Card from "./Card";
import TopRatedProviders from "../components/TopRatedProviders/TopRatedProviders";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Hero />
      <h1 className="font-black text-3xl text-center my-7">Learn Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <TopRatedProviders></TopRatedProviders>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
