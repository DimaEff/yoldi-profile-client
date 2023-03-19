import React, { FC, PropsWithChildren } from "react";
import { Typography } from "antd";

import { subtitleStyles } from "@/shared/ui/Typography/styles";

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Typography.Title style={subtitleStyles}>{children}</Typography.Title>
    );
};

export default Subtitle;
