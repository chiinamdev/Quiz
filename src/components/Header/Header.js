import React from "react";

import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";

import clsx from 'clsx';

import { Link} from "react-router-dom";
import { Button } from "../Button";
import Container from "../Container";
import NavLink from "../NavLink";
import Logo from "../Logo";

const MobileNavLink = ({ to, children }) => {
  return (
    <PopoverButton
      as={Link}
      to={to}
      className="block w-full p-2 no-underline"
    >
      {children}
    </PopoverButton>
  );
}

const MobileNavIcon = ({ open }) => {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

const MobileNavigation = () => {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink to="/admin">About us</MobileNavLink>
        <MobileNavLink to="#Support">Support</MobileNavLink>
        <MobileNavLink to="#pricing">Pricing</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink to="/login">Sign in</MobileNavLink>
      </PopoverPanel>
    </Popover>
  );
}

const Header = () => {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link to="/admin" aria-label="Home">
            <Logo className="h-10 w-auto" ></Logo>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink to="/admin">About us</NavLink>
              <NavLink to="/#">Support</NavLink>
              <NavLink to="/#">Pricing</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink to="/login">Sign in</NavLink>
            </div>
            <Button to="/register" color="blue" className="no-underline">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
