import React, { FC, PropsWithChildren } from "react";
import { Typography } from "antd";

import useColor from "@/shared/hooks/useColor";
import { ColorsTypes } from "@/shared/types";
import { getParagraphStyles } from "@/shared/ui/Typography/styles";

interface ParagraphProps {
    mini?: boolean;
    noMargin?: boolean;
    colorType?: ColorsTypes;
}

const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
    children,
    mini,
    noMargin,
    colorType,
}) => {
    const color = useColor(colorType || "txt_primary");

    return (
        <Typography.Paragraph
            style={getParagraphStyles(color, !!mini, !!noMargin)}
        >
            {children}
        </Typography.Paragraph>
    );
};

export default Paragraph;
