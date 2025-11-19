import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">SkillSwap</h2>
          <p className="text-sm leading-6">
            Connect, Learn, and Grow. Exchange skills within your local
            community and empower each other through learning.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/skills" className="hover:text-white transition-colors">
                Explore Skills
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Contact Info
          </h3>
          <p className="text-sm"> 123 Learning Street, Dhaka, Bangladesh</p>
          <p className="text-sm mt-1">📞 +880 1765-123456</p>
          <p className="text-sm mt-1"> learningpoint@gmail.com</p>

          <div className="flex space-x-4 mt-4 text-lg">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-sky-400 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-500 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter to get the latest skill updates and
            community news.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-gray-900 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
        <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors mx-2"
          >
            Privacy Policy
          </a>
          |
          <a href="/terms" className="hover:text-white transition-colors mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
