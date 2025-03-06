import '../assets/styles/nav.css'
import React, { useState } from "react";
import { Link } from "react-router";
const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="/images/logos/logo.png"
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>
          <div className="flex items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-[#8750f7] focus:ring-1 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/">Home</ListItem>
                  <ListItem NavLink="/about">About</ListItem>
                  {/* <ListItem NavLink="/#services">Services</ListItem>
                  <ListItem NavLink="/#works">Works</ListItem>
                  <ListItem NavLink="/about#certificates">Skills</ListItem>
                  <ListItem NavLink="/#testimonials">Testimonials</ListItem> */}
                  <ListItem NavLink="/contact">Contact</ListItem>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          id="nav-huver" className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
