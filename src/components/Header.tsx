import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" top-0 w-full z-100 bg-bg_primary border-b-2 border-white border-opacity-10 py-1">
      <nav className="flex items-center justify-between px-6 py-4 laptop:px-10">
        {/* Logo (Căn trái) */}
        <img 
          src="/src/assets/Logo/Frame 1-3.png" 
          alt="Logo" 
          className="h-8 w-auto laptop:h-10"
        />

        {/* Menu (Căn giữa) */}
        <ul className="hidden laptop:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <NavLink to="/" className="text-white text-opacity-80 hover:text-primary_light" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-white text-opacity-80 hover:text-primary_light">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="text-white text-opacity-80 hover:text-primary_light">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="text-white text-opacity-80 hover:text-primary_light">
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Button Contact (Căn phải) */}
        <div className="hidden laptop:block">
          <button className="px-4 py-2 border border-white border-opacity-40 text-white hover:bg-primary hover:text-white transition rounded-lg">
            Contact
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="laptop:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-xl text-white">☰</button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink to="/" className="text-white text-opacity-80 hover:text-blue-500" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-white text-opacity-80 hover:text-blue-500">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="text-white text-opacity-80 hover:text-blue-500">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="text-white text-opacity-80 hover:text-blue-500">
                Blog
              </NavLink>
            </li>
            <li>
              <button className="px-4 py-2 border border-white border-opacity-40 text-white hover:bg-blue-500 hover:text-white transition rounded">
                Contact
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;