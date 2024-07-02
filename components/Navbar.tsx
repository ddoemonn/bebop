import React from 'react';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex p-3 w-full">
      <ul className="flex items-center w-full gap-3 text-lg font-semibold">
        <li className="">
          <Link
            href="/"
            className="flex items-center "
          >
            <div className="bg-black w-12 h-12 rounded-full mr-2" />
            <p className="text-4xl font-bold">Bebop</p>
          </Link>
        </li>
        <li className="flex-1 text-right flex justify-end mt-1">
          <Link href="/sign-in">
            <p className=" inline-flex">Sign in</p>
          </Link>
        </li>
        <li className="mt-1">
          <Link href="/sign-up">
            <p className=" inline-flex">Create account</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
