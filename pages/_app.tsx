import { NextPage } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { ReactElement } from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout || ((page) => page);

	return getLayout(<Component {...pageProps} />);
};

export default MyApp;

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};
