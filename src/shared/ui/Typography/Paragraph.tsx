import React, { FC, PropsWithChildren } from "react";
import { Typography } from "antd";

import { getParagraphStyles } from "@/shared/ui/Typography/styles";

interface ParagraphProps {
    // eslint-disable-next-line react/require-default-props
    mini?: boolean;
}

const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
    children,
    mini,
}) => {
    return (
        <Typography.Paragraph style={getParagraphStyles(!!mini)}>
            {children}
        </Typography.Paragraph>
    );
};

export default Paragraph;
