import React, { FC, PropsWithChildren } from "react";
import { Layout } from "antd";

import useColor from "@/shared/hooks/useColor";
import { footerStyles } from "@/shared/Layout/Footer/styles";

const Footer: FC<PropsWithChildren> = ({ children }) => {
    const color = useColor("bg_primary");
    const borderColor = useColor("strokes_primary");

    return (
        <Layout.Footer style={footerStyles(color, borderColor)}>
            {children}
        </Layout.Footer>
    );
};

export default Footer;
