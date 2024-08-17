import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-100 to-blue-100 py-4 mt-8 lg:mt-20 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:mx-auto ">
        <div className=" md:text-left">
          <img src="logo.png" alt="Little Kanha" className="h-16 md:mx-0 mb-1 lg:mx-auto lg:h-24 lg:mb-10" />
          <p className="text-gray-700 text-sm leading-relaxed lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
          </p>
        </div>

        <div className=" md:text-left lg:mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 lg:text-2xl">Quick Links</h3>
          <ul className=" text-gray-700 space-y-2">
            <div className="flex space-x-3 justify-center lg:block lg:space-x-0 ">
              <li className="lg:mt-2">
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li className="lg:mt-2">
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li className="lg:mt-2">
                <a href="#" className="hover:text-gray-900">
                  Our Caring Faculty
                </a>
              </li>
            </div>
            <div className="flex space-x-3 justify-center lg:block lg:space-x-0 ">
              <li className="lg:mt-2">
                <a href="#" className="hover:text-gray-900 ">
                  Our Program
                </a>
              </li>
              <li className="lg:mt-2">
                <a href="#" className="hover:text-gray-900 ">
                  Gallery
                </a>
              </li>
              <li className="lg:mt-2">
                <a href="#" className="hover:text-gray-900 ">
                  Contacts
                </a>
              </li>
            </div>
            <li>
              <a href="#" className="hover:text-gray-900 flex space-x-3 justify-center lg:block lg:space-x-0 lg:space-y-2">
                Admission Form
              </a>
            </li>
          </ul>
        </div>

        <div className=" md:text-left lg:mx-auto ">
          <div className="text-gray-700 text-sm leading-relaxed mb-4 space-y-3">
            <p className="flex space-x-1 text-lg lg:text-2xl">
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <p>9876543210</p>
            </p>
            <p>
              Open: <br /> Mon - Sat <br /> 9:00 - 16:00
            </p>
          </div>
          <p className="mt-2 text-lg lg:text-2xl lg:mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Little Kanha
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.</p>
        </div>
      </div>
    </footer>
  );
}
