import React, { FC } from 'react';
import 'intersection-observer';
import { AppProps } from 'next/app';

import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;