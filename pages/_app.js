import '../styles/globals.css'
import '../styles/rc-slider.css'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot, atom, selector } from 'recoil'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const beerWish = atom({
  key: 'beerWish',
  default: {},
});

export const getBeerWish = selector({
  key: 'beerWish',
  get: ({ get }) => {
    const wishlist=get(beerWish);
    return wishlist;
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      {process.env.NODE_ENV !== 'production' ?
        <ReactQueryDevtools initialIsOpen={false} /> :
        null}
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default MyApp
