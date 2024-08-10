// components/Sidebar.js

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex md:hidden p-4">
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? (
            <div className="w-6 h-6 flex flex-col justify-between items-center">
                <XMarkIcon className="h-6 w-6 text-gray-500" />
            </div>
          ) : (
            <div className="w-2 h-6 my-6 flex flex-col justify-between items-center">
                <Bars3Icon className="h-6 w-6 text-gray-500" />
            </div>
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-lvh bg-[#e5f6ff] text-gray-900 w-64 transform ${
          isOpen ? "translate-x-0 h-1/2 w-lvw mx-12" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Menu</h1>
          <nav className="mt-8">
            <ul>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
