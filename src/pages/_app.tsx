// pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '../app/Components/Layout'; // Adjust the path if needed
import '../app/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
