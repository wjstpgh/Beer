import '../styles/globals.css'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      {process.env.NODE_ENV !== 'production' ?
        <ReactQueryDevtools initialIsOpen={false} /> :
        null}
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
