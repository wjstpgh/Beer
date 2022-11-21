import React, { useEffect, useState } from 'react';
import BeerWish from '@components/beerWish';
import Navbar from '@components/navbar';
import { useRecoilState } from 'recoil';
import { useDrop } from 'react-dnd';
import { beerWish, ItemTypes } from '@store/beerwish';

function Wishpage() {
  const [wishList, setWishList] = useState([]);
  const [beerId, setBeerId] = useState(0);
  const [wishBeer, setWishBeer] = useRecoilState(beerWish);

  useEffect(() => {
    setWishList(wishBeer);
  }, [wishBeer]);

  useEffect(() => {
    deleteBeerById();
  }, [beerId]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BEER,
    drop: () => ({ name: 'dropbox' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const getBeerIdtoDelete = (id) => {
    setBeerId(id);
  };

  const deleteBeerById = () => {
    setWishBeer(wishBeer.filter((beer) => beer.id !== beerId));
  };

  const isDropActive = canDrop && isOver;

  let backgroundColor = 'rgb(239, 211, 133)';
  if (isDropActive) {
    backgroundColor = 'rgba(255, 255, 255,.4)';
  } else if (canDrop) {
    backgroundColor = '#b45309';
  }

  return (
    <div style={{ backgroundColor }} className="rounded-md">
      <Navbar />
      <div
        ref={drop}
        className="container mx-auto px-12 py-6 backdrop-blur-sm bg-stone-50/30 rounded-xl"
      >
        <div className="grid grid-cols-4 gap-2">
          {wishList.map((beer) => (
            <BeerWish
              key={beer.id}
              beer={beer}
              getBeerIdtoDelete={getBeerIdtoDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishpage;
