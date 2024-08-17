import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white shadow-lg sticky top-0 left-0 z-20">
      <div className=" mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center py-3 xl:w-80">
            <img src="logo.png" alt="Little Kanha" className="h-12 cursor-pointer lg:h-20 lg:ml-4" />
          </div>

          <div className="hidden lg:flex items-center mx-auto space-x-8 text-xl ">
            <a href="#" className="text-gray-800 hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-400">
              Our Caring Faculty
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-400">
              Our Program
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-400">
              Gallery
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-400">
              Contact
            </a>
          </div>

          <div className="hidden ml-auto lg:flex items-center">
            <a href="#" className="bg-indigo-100 text-2xl font-semibold hover:bg-indigo-200 hover:text-indigo-800 px-6 py-2 rounded-full transition duration-300">
              Admission Form
            </a>
          </div>
          <div className="my-auto">
            <button onClick={toggleSidebar} className=" z-20 flex flex-col items-center justify-between w-8 h-6 p-1 text-gray-800 focus:outline-none lg:hidden">
              <span className={`block h-0.5 w-full bg-gray-800 transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-0.5 w-full bg-gray-800 transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full bg-gray-800 transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </button>
          </div>
          <div className={`fixed top-0 right-0 z-10 h-full w-full bg-blue-100 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-between items-center p-4">
              <img src="logo.png" alt="Logo" className="h-12" />
              <button onClick={toggleSidebar} className="mr-4">
                <FontAwesomeIcon icon={faX} className="text-2xl" />
              </button>
            </div>
            <nav className="p-4 ">
              <ul>
                <li className="mb-4 text-lg font-semibold text-gray-800">Home</li>
                <li className="mb-4 text-lg font-semibold text-gray-800">About</li>
                <li className="mb-4 text-lg font-semibold text-gray-800">Our Caring Faculty</li>
                <li className="mb-4 text-lg font-semibold text-gray-800">Our Program</li>
                <li className="mb-4 text-lg font-semibold text-gray-800">Gallery</li>
                <li className="mb-4 text-lg font-semibold text-gray-800">Contact</li>
              </ul>
              <button className="mt-6 px-4 py-2 bg-white text-gray-800 rounded-full font-semibold shadow-lg">Admission Form</button>
            </nav>
          </div>
          <div onClick={toggleSidebar} className={`fixed inset-0 z-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}></div>
        </div>
      </div>
    </nav>
  );
}
