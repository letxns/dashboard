// components/Sidebar.js

import { ArrowTrendingUpIcon, Bars3Icon, BriefcaseIcon, ChartBarSquareIcon, ChatBubbleLeftRightIcon, HomeIcon, RocketLaunchIcon, TableCellsIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-4">
      {isOpen ? (
        <div className="w-2 h-6 flex flex-col justify-between items-center">
          <div className="fixed top-0 left-0 h-lvh bg-[#FBFCF8] text-gray-900 w-64">
            <div className="p-4">
              <XMarkIcon onClick={toggleSidebar} className="h-6 w-6 text-gray-900 hover:cursor-pointer" />
              <nav className="mt-8 text-start">
                <ul>
                  <li className="mb-4">
                    <a href="/" className="hover:text-tradesee-blue active:text-tradesee-blue flex flex-row">
                      <HomeIcon class="h-6 w-6 text-tradesee-blue" />
                      <span className="px-2">Home</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:text-tradesee-blue flex flex-row">
                      <ChartBarSquareIcon class="h-6 w-6 text-tradesee-blue" />
                      <span className="px-2">Dashboards</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:text-tradesee-blue flex flex-row">
                      <ArrowTrendingUpIcon class="h-6 w-6 text-tradesee-blue" />
                      <span className="px-2">Analytics</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:text-tradesee-blue flex flex-row">
                      <RocketLaunchIcon class="h-6 w-6 text-tradesee-blue" />
                      <span className="px-2">Sales</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:text-tradesee-blue flex flex-row">
                      <BriefcaseIcon class="h-6 w-6 text-tradesee-blue" />
                      <span className="px-2">Leads</span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:text-tradesee-blue flex flex-row">
                      <ChatBubbleLeftRightIcon class="h-6 w-6 text-tradesee-blue" />
                      <span className="px-2">Support</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-2 h-6 flex flex-col justify-between items-center">
          <Bars3Icon onClick={toggleSidebar} className="h-6 w-6 text-white hover:cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
