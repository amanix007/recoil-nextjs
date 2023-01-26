import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';




export default function MyApp({ Component, pageProps }) {


  return (
    <RecoilRoot>
      
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
