import React, { FC, PropsWithChildren } from "react";

import Content from "@/shared/Layout/Content";
import Header from "@/shared/Layout/Header";

const AuthorizedLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <Content colorType="bg_primary">{children}</Content>
        </>
    );
};

export default AuthorizedLayout;
