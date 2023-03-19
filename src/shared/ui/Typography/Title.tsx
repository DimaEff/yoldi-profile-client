import React, { FC, PropsWithChildren } from "react";
import { Typography } from "antd";

import { titleStyles } from "@/shared/ui/Typography/styles";

const Title: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Typography.Title style={titleStyles} level={3}>
            {children}
        </Typography.Title>
    );
};

export default Title;
