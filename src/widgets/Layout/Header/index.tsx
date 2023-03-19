import React from "react";
import { Avatar, Layout } from "antd";

import useColor from "@/shared/hooks/useColor";
import { headerStyles } from "@/widgets/Layout/Header/styles";
import Logo from "@/widgets/Layout/Header/ui/Logo";

const { Header } = Layout;

const AppHeader = () => {
    const color = useColor("bg_primary");
    const borderColor = useColor("strokes_primary");

    return (
        <Header style={headerStyles(color, borderColor)}>
            <Logo />
            <Avatar>D</Avatar>
        </Header>
    );
};

export default AppHeader;
