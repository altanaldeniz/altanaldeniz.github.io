import Head from 'next/head';
import type { ReactElement } from 'react';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <title>Altan Aldeniz</title>
        <meta name="description" content="Altan Aldeniz's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[70vh] flex flex-col mt-10 justify-center mr-10">
        <h1 className="text-3xl font-semibold block">Altan Aldeniz</h1>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
