import React from 'react';

const BeerWish = ({ beer }) => {
  const { name, image_url } = beer;
  return (
    <div className="p-1 inline-flex bg-orange-800 rounded-md text-orange-300 cursor-pointer">
      <img className="h-24" src={image_url} alt="#" />
      <p className="text-2xl">{name}</p>
    </div>
  );
};

export default BeerWish;
