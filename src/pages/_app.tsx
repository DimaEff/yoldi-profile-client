import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import "@/app/styles/index.scss";

import { lightConfig } from "@/app/theme";
import { Layout } from "@/shared/Layout";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <main className={inter.className}>
            <ConfigProvider theme={lightConfig}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ConfigProvider>
        </main>
    );
};

export default App;
