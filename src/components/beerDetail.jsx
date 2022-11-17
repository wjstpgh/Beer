import React from 'react';

const BeerDetail = ({ beer }) => {
  const { image_url, name, tagline, first_brewed, description, abv } = beer;

  return (
    <div className="w-1/2 p-5 bg-orange-500/20 backdrop-blur-sm absolute inset-1/4 rounded-xl overflow-auto">
      <img className="w-9 relative inset-x-3/4" src={image_url} alt="#" />
      <span className="block text-orange-700 uppercase text-lg underline decoration-double underline-offset-2 font-semibold italic">
        name
      </span>
      <p>{name}</p>
      <span className="block text-orange-700 uppercase text-lg underline decoration-double underline-offset-2 font-semibold italic">
        tagline
      </span>
      <p>{tagline}</p>
      <span className="block text-orange-700 uppercase text-lg underline decoration-double underline-offset-2 font-semibold italic">
        first_brewed
      </span>
      <p>{first_brewed}</p>
      <span className="block text-orange-700 uppercase text-lg underline decoration-double underline-offset-2 font-semibold italic">
        description
      </span>
      <p className="whitespace-pre-line">{description}</p>
      <span className="block text-orange-700 uppercase text-lg underline decoration-double underline-offset-2 font-semibold italic">
        abv
      </span>
      <p>{abv}</p>
    </div>
  );
};

export default BeerDetail;
