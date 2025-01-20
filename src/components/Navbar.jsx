import { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink className="flex items-center mr-4" to="/">
            <img className="h-10 w-auto" src={logo} alt="Awan Code" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              Awan <span className="text-purple-600">Code</span>
            </span>
          </NavLink>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:ml-auto">
            <div className="flex space-x-2">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/proyek" className={linkClass}>
                Proyek
              </NavLink>
              <NavLink to="/chertification" className={linkClass}>
                Chertification
              </NavLink>
              <NavLink to="/services" className={linkClass}>
                Services
              </NavLink>
              <NavLink to="/services" className={linkClass}>
                
              </NavLink>
              <a
                href="https://github.com/DiyawanDawan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGithub className="text-black fas fa-react mr-2" size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className={linkClass} onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink to="/proyek" className={linkClass} onClick={toggleMenu}>
                Proyek
              </NavLink>
              <NavLink
                to="/chertification"
                className={linkClass}
                onClick={toggleMenu}
              >
                Chertification
              </NavLink>
              <NavLink to="/services" className={linkClass} onClick={toggleMenu}>
                Services
              </NavLink>
              <a
                href="https://github.com/DiyawanDawan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black px-3 py-2"
              >
                <FaGithub className="text-black" size={30} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
