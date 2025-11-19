import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "animate.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  });

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const learningCards = [
    {
      subject: "Web Development",
      img: "https://i.ibb.co.com/dsLXq1hF/is-web-development-good-career.jpg",
      description:
        "Turn your creativity into real-world websites! Learn how to design and build responsive, interactive web applications using HTML, CSS, JavaScript, and React. This course takes you from beginner to confident developer through hands-on projects that mirror professional work. By the end, you’ll be able to bring your ideas to life on the web — beautifully and efficiently.",
    },
    {
      subject: "Data Science",
      img: "https://i.ibb.co.com/7tPJc48Q/What-Really-Is-Data-Science-A-Super-Simple-Explanation-For-Anyone.png",
      description:
        "Discover the power of data and how it shapes the world around us! Dive into Python, statistics, and machine learning to uncover insights hidden in massive datasets. You’ll work on real data challenges—predicting trends, building models, and telling stories with numbers. Perfect for anyone who loves solving problems and making data-driven decisions.",
    },
    {
      subject: "Digital Marketing",
      img: "https://i.ibb.co.com/0jmZxg0w/Untitled-design-391.png",
      description:
        "Master the art of online influence! Learn how to craft powerful marketing strategies using SEO, social media, and analytics. You’ll discover how to attract audiences, grow engagement, and turn clicks into loyal customers. Whether you dream of managing campaigns or launching your own brand, this course gives you the skills to dominate the digital space.",
    },
  ];

  const handleCardClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const restartAnimation = (element) => {
    if (!element) return;
    element.classList.remove("animate__lightSpeedInRight");
    void element.offsetWidth;
    element.classList.add("animate__lightSpeedInRight");
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden flex  items-center justify-center px-4 mt-28 rounded-sm">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        allowTouchMove={false}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          const titleEl = document.querySelector(".subject-animate");
          restartAnimation(titleEl);
        }}
        className="w-full"
      >
        {learningCards.map((teacher, index) => (
          <SwiperSlide key={index}>
            <animated.div
              style={fadeIn}
              onClick={handleCardClick}
              className="flex justify-center"
            >
              <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
                <div className="flex-1 text-white">
                  <h2
                    className={`font-bold text-4xl mb-5 animate__animated subject-animate ${
                      activeIndex === index ? "animate__lightSpeedInRight" : ""
                    }`}
                    style={{ animationDuration: "1s" }}
                  >
                    {teacher.subject}
                  </h2>
                  <p className="text-gray-100 leading-relaxed">
                    {teacher.description}
                  </p>
                  <button className="btn mt-12 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition">
                    Find Our Service
                  </button>
                </div>

                <div className="flex-1 w-full p-8 rounded-3xl shadow-2xl items-center cursor-pointer hover:scale-105 transition-transform duration-500">
                  <img
                    className="rounded-xl"
                    src={teacher.img}
                    alt={teacher.name}
                  />
                </div>
              </div>
            </animated.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-6 mt-14">
        <div
          data-aos="fade-up"
          className="w-6 h-6 bg-red-400 rounded-full"
        ></div>
        <div
          data-aos="fade-down"
          className="w-6 h-6 bg-green-400 rounded-full"
        ></div>
        <div
          data-aos="fade-left"
          className="w-6 h-6 bg-yellow-400 rounded-full"
        ></div>
        <div
          data-aos="fade-right"
          className="w-6 h-6 bg-purple-400 rounded-full"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
