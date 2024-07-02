import React from 'react';

import Link from 'next/link';

interface NavbarProps {
  isActive: 'home' | 'sign-in' | 'sign-up';
}

export default function Navbar({ isActive }: NavbarProps) {
  return (
    <nav className="flex p-3 w-full">
      <ul className="flex items-center w-full gap-3 text-lg font-semibold">
        <li className="">
          <Link
            href="/"
            className="flex items-center group"
          >
            <div className="bg-black-to-gradient w-12 h-12 rounded-full mr-2" />
            <p className="text-4xl font-bold text-black-to-gradient">Bebop</p>
          </Link>
        </li>
        <li className="flex-1 text-right flex justify-end mt-1">
          <Link href="/sign-in">
            <p
              className={`inline-flex hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-sky-500 hover:to-emerald-500  text-blue-500  ${isActive === 'sign-in' && '!text-black '}`}
            >
              Sign in
            </p>
          </Link>
        </li>
        <li className="mt-1">
          <Link href="/sign-up">
            <p
              className={`inline-flex hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-sky-500 hover:to-emerald-500 text-emerald-500  ${isActive === 'sign-up' && '!text-black'}`}
            >
              Create account
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const textBlack = 'text-black';
