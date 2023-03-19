import React, { FC, PropsWithChildren } from "react";
import { Layout } from "antd";

import useColor from "@/shared/hooks/useColor";
import { ColorsTypes } from "@/shared/types";
import {
    contentStyles,
    innerContainerStyles,
} from "@/shared/Layout/Content/styles";

interface ContentProps {
    colorType: ColorsTypes;
}

const Content: FC<PropsWithChildren<ContentProps>> = ({
    children,
    colorType,
}) => {
    const color = useColor(colorType);

    return (
        <Layout.Content style={contentStyles(color)}>
            <div style={innerContainerStyles}>{children}</div>
        </Layout.Content>
    );
};

export default Content;
