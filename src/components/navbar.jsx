import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container mx-auto px-20 py-10 grid grid-cols-6 gap-4 text-3xl">
      <Link href="/_homepage" className="col-start-1 col-span-1">
        <span className="px-2 py-1 font-serif italic text-orange-100 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-500 hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-600 hover:to-amber-200 rounded-xl">
          Home
        </span>
      </Link>
      <Link href="/_listpage" className="col-start-5 col-span-1">
        <span className="px-2 py-1 font-serif italic text-orange-100 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-500 hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-600 hover:to-amber-200 rounded-xl">
          List
        </span>
      </Link>
      <Link href="/_wishpage" className="col-start-6 col-span-1">
        <span className="px-2 py-1 font-serif italic text-orange-100 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-500 hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-600 hover:to-amber-200 rounded-xl">
          Wish
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
