import React, { FC, PropsWithChildren } from "react";
import { Card as ACard, CardProps as ACardProps } from "antd";
import { CardInterface } from "antd/es/card";

import { cardStyles } from "@/shared/ui/Card/styles";

const Card: FC<PropsWithChildren<ACardProps & CardInterface>> = ({
    children,
    style,
    ...props
}) => {
    return (
        <ACard style={{ ...cardStyles, ...style }} {...props}>
            {children}
        </ACard>
    );
};

export default Card;
