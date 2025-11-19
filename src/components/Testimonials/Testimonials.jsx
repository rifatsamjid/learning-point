import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const testimonials = [
  {
    name: "Sara Khan",
    role: "Guitar Student",
    feedback:
      "I found an amazing guitar teacher nearby. Lessons are fun and easy to follow!",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Arif Hossain",
    role: "Language Tutor",
    feedback:
      "Teaching through this platform is smooth and rewarding. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Nadia Rahman",
    role: "Yoga Student",
    feedback:
      "Yoga sessions are convenient and personalized. I feel healthier every day!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Imran Ali",
    role: "Coding Mentor",
    feedback:
      "I love mentoring students here. The platform makes it super easy to connect with learners!",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Fatima Noor",
    role: "Photography Student",
    feedback:
      "I improved my photography skills in just a few weeks thanks to the amazing instructors!",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Rashid Karim",
    role: "Fitness Trainer",
    feedback:
      "I enjoy offering training sessions here. Users are motivated and friendly!",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-400 relative rounded-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-100">
          What Our Users Say
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer animate__animated animate__fadeInUp"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-200"
              />
              <p className="mb-4 italic text-gray-600">"{t.feedback}"</p>
              <h4 className="font-semibold text-lg text-gray-800">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
