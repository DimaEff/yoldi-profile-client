import React, { FC, PropsWithChildren } from "react";

import Content from "@/shared/Layout/Content";
import Box from "@/shared/ui/Box";

const GuestContent: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Content colorType="bg_secondary">
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                {children}
            </Box>
        </Content>
    );
};

export default GuestContent;
