import React, { FC, PropsWithChildren } from "react";
import { Layout } from "antd";

import useColor from "@/shared/hooks/useColor";
import { footerStyles } from "@/widgets/Layout/Footer/styles";

const { Footer } = Layout;

const AppFooter: FC<PropsWithChildren> = ({ children }) => {
    const color = useColor("bg_primary");
    const borderColor = useColor("strokes_primary");

    return <Footer style={footerStyles(color, borderColor)}>{children}</Footer>;
};

export default AppFooter;
