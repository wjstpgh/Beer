import { atom, selector } from 'recoil';

export const beerWish = atom({
  key: 'beerWish',
  default: [],
});

export const getBeerWish = selector({
  key: 'getbeerWish',
  get: ({ get }) => {
    return get(beerWish);
  },
});
