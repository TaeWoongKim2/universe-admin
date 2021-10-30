import React from 'react';

import { Link } from 'react-router-dom';

const menuList = [
  {
    href: '/login',
    label: null,
    showByAuth: false,
  },
  {
    href: '/',
    label: 'Home',
    showByAuth: true,
  },
  {
    href: '/logout',
    label: 'Logout',
    showByAuth: true,
  },
];

type Auth = {
  authenticated: boolean;
}

function Header({
  authenticated,
}: Auth) {
  return (
    <header>
      <h1>
        {menuList.map((menu) => (
          (authenticated === menu.showByAuth)
            ? (
              <Link
                key={menu.href}
                to={menu.href}
              >
                {menu.label}
                {' '}
              </Link>
            )
            : null
        ))}
      </h1>
    </header>
  );
}

export default Header;
