import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { appWithTranslation } from 'next-i18next';
import '@styles/globals_Style.css';
import '@styles/rcslider_Style.css';

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
      {process.env.NODE_ENV !== 'production' ? (
        <ReactQueryDevtools initialIsOpen={false} />
      ) : null}
      <RecoilRoot>
        <DndProvider backend={HTML5Backend}>
          <Component {...pageProps} />
        </DndProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
