import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { getSiteSettings } from "../../apis/publicApi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  }, [location]);

  const isAboutActive = location.pathname.startsWith("/about");

  const [data, setData] = useState(null);
  const getData = async () => {
    const data = await getSiteSettings();
    if (data) {
      setData(data);
    } else {
      setData(null);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const findKey = (key) => {
    const findData = data?.data?.find((item) => item?.key === key);

    return findData?.value;
  };

  const email = findKey("email");
  const phone_no = findKey("phone");
  console.log({ phone_no });

  return (
    <header className="bg-white ">
      {/* Top Bar */}
      <div className="bg-[#25883d] text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <Facebook size={16} />
            <Twitter size={16} />
            <Instagram size={16} />
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6">
            <span className="flex items-center gap-1">📞 {phone_no} </span>
            <span className="flex items-center gap-1">✉️ {email}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.png"
                alt="FAST-FAN Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation Links */}
            <ul
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row gap-6 absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none z-40`}
            >
              <li>
                <Link
                  to="/"
                  className={`hover:text-[#047857] transition font-medium ${
                    location.pathname === "/"
                      ? "text-green-700 font-semibold"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* About Us Dropdown */}
              <li
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 font-semibold hover:text-green-800 transition ${
                    isAboutActive
                      ? "text-green-700 border-b-2 border-green-700 pb-1"
                      : ""
                  }`}
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                >
                  About Us
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`${
                    isAboutDropdownOpen ? "block" : "hidden"
                  } absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-56 z-50`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/about/overview"
                    className="block px-4 py-3 hover:bg-green-50 hover:text-[#047857] transition"
                  >
                    Association Overview
                  </Link>
                  <Link
                    to="/about/vision"
                    className="block px-4 py-3 hover:bg-green-50 hover:text-[#047857] transition"
                  >
                    Our Vision
                  </Link>
                  <Link
                    to="/about/chairman"
                    className="block px-4 py-3 hover:bg-green-50 hover:text-[#047857] transition"
                  >
                    From Chairman
                  </Link>
                </div>
              </li>

              <li>
                <Link
                  to="/committee"
                  className={`hover:text-[#047857] transition font-medium ${
                    location.pathname === "/committee"
                      ? "text-green-700 font-semibold"
                      : ""
                  }`}
                >
                  Our Committee
                </Link>
              </li>
              <li>
                <Link
                  to="/members"
                  className={`hover:text-[#047857] transition font-medium ${
                    location.pathname === "/members"
                      ? "text-green-700 font-semibold"
                      : ""
                  }`}
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className={`hover:text-[#047857] transition font-medium ${
                    location.pathname === "/news"
                      ? "text-green-700 font-semibold"
                      : ""
                  }`}
                >
                  News & Notices
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`hover:text-[#047857] transition font-medium ${
                    location.pathname === "/events"
                      ? "text-green-700 font-semibold"
                      : ""
                  }`}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`hover:text-[#047857] transition font-medium ${
                    location.pathname === "/contact"
                      ? "text-green-700 font-semibold"
                      : ""
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Report Button */}
            {/* Report Button */}
            <Link
              to="/report-issue"
              className="hidden md:block border-2 border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white transition text-center"
            >
              Report an Issue
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
