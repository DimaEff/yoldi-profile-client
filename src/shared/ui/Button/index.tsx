import React, { FC } from "react";
import { Button as AButton, ButtonProps as AButtonProps } from "antd";

import { buttonStyles } from "@/shared/ui/Button/styles";

const Button: FC<AButtonProps> = ({ children, type, disabled, ...props }) => {
    return (
        <AButton
            type={type || "default"}
            style={buttonStyles}
            disabled={!!disabled}
            {...props}
        >
            {children}
        </AButton>
    );
};

export default Button;
