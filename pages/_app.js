import NextNProgress from 'nextjs-progressbar';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '~/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
