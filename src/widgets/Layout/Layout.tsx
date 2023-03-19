import React, { FC, PropsWithChildren } from "react";
import { Layout } from "antd";

import Header from "@/widgets/Layout/Header";
import { layoutStyles } from "@/widgets/Layout/styles";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Layout style={layoutStyles}>
            <Header />
            {children}
        </Layout>
    );
};

export default AppLayout;
