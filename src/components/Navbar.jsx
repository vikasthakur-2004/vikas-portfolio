import { useState } from "react";
import { Link } from "react-scroll";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">VT.</h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-white"
              className="cursor-pointer hover:text-white"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-white"
              className="cursor-pointer hover:text-white"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-white"
              className="cursor-pointer hover:text-white"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-white"
              className="cursor-pointer hover:text-white"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-white"
              className="cursor-pointer hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Hamerburg Menu */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-gray-800">
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-300">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  spy={true}
              activeClass="text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
              activeClass="text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
              activeClass="text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
              activeClass="text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
              activeClass="text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
