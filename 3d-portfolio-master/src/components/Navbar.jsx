import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add/remove background styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe sections for active link highlighting
  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`w-full fixed z-40 p-8 sm:px-16 sm:py-10 transition-all ${
        scrolled ? "bg-black" : "bg-gradient-to-b from-black"
      }`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[26px] lg:text-[36px] font-bold cursor-pointer">
            SP
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative text-[18px] lg:text-[24px] font-bold cursor-pointer ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white`}
              onClick={() => setActive(nav.id)}
            >
              {active === nav.id && (
                <div className="absolute right-0 w-2 h-6 lg:h-8 bg-quaternary" />
              )}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu Dropdown */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 bg-black rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[16px] font-medium cursor-pointer ${
                    active === nav.id ? "text-quaternary" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
