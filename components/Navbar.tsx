// Navbar.tsx
import React, { useState } from 'react';

import Link from 'next/link';

import Dropdown from './Dropdown'; // Adjust the path based on your file structure

interface NavbarProps {
  isActive: 'home' | 'sign-in' | 'sign-up' | 'explore';
}

const Navbar: React.FC<NavbarProps> = ({ isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Define dropdown items
  const dropdownItems = [
    { label: 'Films', href: '/explore/films', hoverColor: 'indigo' },
    { label: 'Series', href: '/explore/series', hoverColor: 'blue' },
    { label: 'Books', href: '/explore/books', hoverColor: 'green' },
    { label: 'Music', href: '/explore/music', hoverColor: 'red' },
  ];

  return (
    <nav className="flex p-3 w-full">
      <ul className="flex items-center w-full gap-3 text-lg font-semibold z-50">
        <li>
          <Link
            href="/"
            className="flex items-center group"
          >
            <div className="bg-black-to-gradient w-12 h-12 rounded-full mr-2" />
            <p className="text-4xl font-bold text-black-to-gradient">Bebop</p>
          </Link>
        </li>
        <li className="flex-1 text-right flex justify-end mt-1">
          <div className="relative inline-block text-left">
            <div>
              <p
                onClick={toggleDropdown}
                className={`selection:bg-none cursor-pointer inline-flex hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 text-indigo-500 ${isActive === 'explore' && '!text-black'}`}
              >
                Explore
              </p>
            </div>

            <Dropdown
              isOpen={isOpen}
              items={dropdownItems}
            />
          </div>
        </li>
        <li className=" text-right flex justify-end mt-1">
          <Link href="/sign-in">
            <p
              className={`inline-flex hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 text-blue-500 ${isActive === 'sign-in' && '!text-black'}`}
            >
              Sign in
            </p>
          </Link>
        </li>
        <li className="mt-1">
          <Link href="/sign-up">
            <p
              className={`inline-flex hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 text-emerald-600 ${isActive === 'sign-up' && '!text-black'}`}
            >
              Create account
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

const textBlack = 'text-black';
