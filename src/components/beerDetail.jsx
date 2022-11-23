import React from 'react';
import { useTranslation } from 'next-i18next';

function BeerDetail({ beer }) {
  const { image_url, name, tagline, first_brewed, description, abv } = beer;

  const { t } = useTranslation('common');

  return (
    <div className="absolute inset-1/4 w-1/2 p-5 bg-orange-500/20 backdrop-blur-sm rounded-xl overflow-auto">
      <img className="w-9 relative inset-x-3/4" src={image_url} alt="#" />
      <span className="block italic uppercase text-lg font-semibold text-orange-700 underline decoration-double underline-offset-2">
        {t('name')}
      </span>
      <p>{name}</p>
      <span className="block italic uppercase text-lg font-semibold text-orange-700 underline decoration-double underline-offset-2">
        {t('tagline')}
      </span>
      <p>{tagline}</p>
      <span className="block italic uppercase text-lg font-semibold text-orange-700 underline decoration-double underline-offset-2">
        {t('first_brewed')}
      </span>
      <p>{first_brewed}</p>
      <span className="block italic uppercase text-lg font-semibold text-orange-700 underline decoration-double underline-offset-2">
        {t('description')}
      </span>
      <p className="whitespace-pre-line">{description}</p>
      <span className="block italic uppercase text-lg font-semibold text-orange-700 underline decoration-double underline-offset-2">
        {t('abv')}
      </span>
      <p>{abv}</p>
    </div>
  );
}

export default BeerDetail;
