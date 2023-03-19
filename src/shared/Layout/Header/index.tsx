import React, { FC } from "react";
import { Layout } from "antd";

import useColor from "@/shared/hooks/useColor";
import { headerStyles } from "@/shared/Layout/Header/styles";
import Logo from "@/shared/Layout/Header/ui/Logo";

interface HeaderProps {
    rightSlot: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ rightSlot }) => {
    const color = useColor("bg_primary");
    const borderColor = useColor("strokes_primary");

    return (
        <Layout.Header style={headerStyles(color, borderColor)}>
            <Logo />
            {rightSlot}
        </Layout.Header>
    );
};

export default Header;
