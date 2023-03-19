import React, { FC, PropsWithChildren } from "react";
import { Layout } from "antd";

import { layoutStyles } from "@/shared/Layout/styles";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
    return <Layout style={layoutStyles}>{children}</Layout>;
};

export default AppLayout;
