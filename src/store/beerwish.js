import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'persistBeerWish',
  storage: sessionStorage,
});

export const beerWish = atom({
  key: 'beerWish',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const getBeerWish = selector({
  key: 'getbeerWish',
  get: ({ get }) => {
    return get(beerWish);
  },
});
