"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu,X, Home, User, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white h-screen w-64 p-5 space-y-6 transition-transform z-50 ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 fixed md:relative`}>
        <h2 className="text-xl font-bold">Dashboard</h2>
        <nav className="mt-5 space-y-4">
          <Link href="/" className="flex items-center space-x-2 hover:text-gray-300">
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link href="/profile" className="flex items-center space-x-2 hover:text-gray-300">
            <User size={20} />
            <span>Profile</span>
          </Link>
          <Link href="/settings" className="flex items-center space-x-2 hover:text-gray-300">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute top-4 left-4 text-white bg-gray-800 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Content Area */}
      <div className="flex-1 p-5">
        <h1 className="text-2xl">Welcome to the Dashboard</h1>
      </div>
    </div>
  );
};

export default Sidebar;
