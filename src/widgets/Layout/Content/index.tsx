import React, { FC, PropsWithChildren } from "react";
import { Layout } from "antd";

import useColor from "@/shared/hooks/useColor";
import { ColorsTypes } from "@/shared/types";
import {
    contentStyles,
    innerContainerStyles,
} from "@/widgets/Layout/Content/styles";

interface ContentProps {
    colorType: ColorsTypes;
}

const { Content } = Layout;

const AppContent: FC<PropsWithChildren<ContentProps>> = ({
    children,
    colorType,
}) => {
    const color = useColor(colorType);

    return (
        <Content style={contentStyles(color)}>
            <div style={innerContainerStyles}>{children}</div>
        </Content>
    );
};

export default AppContent;
