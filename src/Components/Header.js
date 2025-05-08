import React, { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MainBody from "./MainBody";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handlePlans = () => {
    navigate("/plans");
  };
  const handleServices = () => {
    navigate("/services");
  };
  const handleAbout = () => {
    navigate("/about");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const myNav = [
    {
      label: "Plans",
    },
    {
      label: "Services",
    },
    {
      label: "About",
    },
    {
      label: "Book Now",
    },
  ];
  return (
    <div>
      {isOpen && (
        <div className="min-h-screen bg-yellow-50 fixed inset-0 z-50">
          <nav className="flex justify-between px-4 mt-[2rem]">
            <div className="flex items-center gap-5">
              <img
                className="block w-9"
                src="https://cdn-icons-png.flaticon.com/128/552/552721.png"
              />
              <p className="text-[1.4rem] font-light">Log In</p>
            </div>
            <div>
              <button onClick={handleClose}>
                <IoCloseOutline className="text-[2.3rem]" />
              </button>
            </div>
          </nav>

          <div className="bg-yellow-50">
            <ul className="flex flex-col items-center gap-7 text-[1.2rem] font-light pt-9">
              <li onClick={handlePlans}>Plans</li>
              <li onClick={handleServices} className="hover:cursor:pointer">
                Services
              </li>
              <li onClick={handleAbout} className="hover:cursor:pointer">
                About
              </li>
              <li onClick={handleServices} className="bg-black text-white py-2 px-12 rounded-full">
                Book Now
              </li>
            </ul>
          </div>
        </div>
      )}

      <header className="h-[5.5rem] flex justify-between items-center px-5 bg-yellow-50 md:hidden">
        <div className="flex items-center gap-1">
          <img
            src="https://cdn-icons-png.flaticon.com/128/15219/15219414.png"
            className="w-6 block"
          />
          <p className="text-[1.3rem] font-light">The cleanic</p>
        </div>

        <div>
          <button onClick={handleOpen}>
            <FaGripLines className="text-[2rem]" />
          </button>
        </div>
      </header>

      <header className="hidden md:block">
        <nav className="flex justify-center fixed inset-0 z-50 mt-5 ">
          <div
            className={`h-[5rem] w-[70rem] flex justify-between items-center px-5 bg-white transition-transform duration-500 z-50 ${
              showNavbar ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex items-center gap-1 w-1/2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/15219/15219414.png"
                className="w-6 block"
              />
              <p className="text-[1.3rem] font-light">The cleanic</p>
            </div>

            <ul className="flex justify-around items-center w-full">
              <li onClick={handlePlans} className="hover:cursor:pointer">
                Plans
              </li>
              <li onClick={handleServices} className="hover:cursor:pointer">
                Services
              </li>
              <li onClick={handleAbout} className="hover:cursor:pointer">
                About
              </li>
              <li className="flex gap-2">
                <p>Log In</p>
                <img
                  className="block w-6"
                  src="https://cdn-icons-png.flaticon.com/128/552/552721.png"
                />
              </li>
              <li onClick={handleServices} className="bg-black text-white rounded-full py-2 px-10">
                Book Now
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <MainBody />
    </div>
  );
};

export default Header;
