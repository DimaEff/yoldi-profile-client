import React, { FC } from "react";
import { Button as AButton, ButtonProps as AButtonProps } from "antd";

import { buttonStyles } from "@/shared/ui/Button/styles";

interface ButtonProps {
    fullWidth?: boolean;
}

const Button: FC<ButtonProps & AButtonProps> = ({
    children,
    type,
    size,
    disabled,
    fullWidth,
    ...props
}) => {
    return (
        <AButton
            type={type || "default"}
            style={buttonStyles(size || "middle", !!fullWidth)}
            disabled={!!disabled}
            {...props}
        >
            {children}
        </AButton>
    );
};

export default Button;
