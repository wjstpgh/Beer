import React from 'react';
import BeerWish from '@components/beerWish';
import Navbar from '@components/navbar';
import { useRecoilValue } from 'recoil';
import { getBeerWish } from '@store/beerwish';

const Wishpage = () => {
  // const wishBeer = useRecoilValue(getBeerWish);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-12 py-6 backdrop-blur-sm bg-stone-50/30 rounded-xl">
        <div className="grid grid-cols-4 gap-2">
          {/* {wishBeer.map((beer) => (
            <BeerWish key={beer.id} beer={beer} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Wishpage;
