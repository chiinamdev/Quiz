import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 no-underline"
    >
      {children}
    </Link>
  );
}

export default NavLink;
