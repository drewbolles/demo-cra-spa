import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function NavLink({ children, to, ...rest }) {
  return (
    <RouterNavLink
      to={to}
      className="px-3 border-b-2 border-transparent h-12 inline-flex items-center hover:bg-gray-200 transition-colors duration-150"
      activeClassName="bg-blue-500 text-white hover:bg-blue-500"
      data-testid="nav-link"
      exact
      {...rest}
    >
      {children}
    </RouterNavLink>
  );
}
