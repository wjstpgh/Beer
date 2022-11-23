import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

function Navbar() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-20 py-10 text-center grid grid-cols-12 gap-4 text-3xl">
      <Link href="/_homepage" className="col-start-1 col-span-2">
        <span className="px-2 py-1 font-serif italic text-orange-100 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-500 hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-600 hover:to-amber-200 rounded-xl">
          {t('Home')}
        </span>
      </Link>
      <Link href="/_listpage" className="col-start-7 col-span-2">
        <span className="px-2 py-1 font-serif italic text-orange-100 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-500 hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-600 hover:to-amber-200 rounded-xl">
          {t('List')}
        </span>
      </Link>
      <Link href="/_wishpage" className="col-start-9 col-span-2">
        <span className="px-2 py-1 font-serif italic text-orange-100 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-500 hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-600 hover:to-amber-200 rounded-xl">
          {t('Wish')}
        </span>
      </Link>
      <Link href="/_homepage" locale="ko" className="col-start-11 col-span-1">
        <span className="px-2 py-1 text-lg text-orange-100 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-500 hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-600 hover:to-amber-200 rounded-xl">
          한국어
        </span>
      </Link>
      <Link href="/_homepage" locale="en" className="col-start-12 col-span-1">
        <span className="px-2 py-1 text-lg text-orange-100 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-500 hover:bg-gradient-to-r hover:from-amber-300 hover:via-amber-600 hover:to-amber-200 rounded-xl">
          English
        </span>
      </Link>
    </div>
  );
}

export default Navbar;
