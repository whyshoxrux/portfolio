import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="navBar sticky top-0 w-full flex justify-between items-center px-4 md:px-12 py-5 bg-black text-amber-400">
      {/* Logo Section */}
      <div className="text-2xl md:text-3xl flex gap-2 items-center">
        <FontAwesomeIcon
          icon={faUserSecret}
          className="icn hover:border-b-4 border-red-600 rounded-md"
        />
        <span className="font-bold font-dancingScript">{"<Shoxrux/>"} </span>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-amber-400 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex gap-6 text-sm md:text-lg font-semibold">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="btn cursor-pointer hover:border-b-4 border-red-600 rounded-md"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-amber-400 p-6 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 md:hidden`}
      >
        <button
          onClick={toggleSidebar}
          className="text-red-600 text-2xl mb-6 focus:outline-none"
        >
          ✖
        </button>
        <nav className="flex flex-col gap-4 text-lg">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:border-b-4 border-red-600"
              onClick={toggleSidebar}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
