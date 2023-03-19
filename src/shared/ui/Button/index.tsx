import React, { FC } from "react";
import { Button as AButton, ButtonProps as AButtonProps, theme } from "antd";

import { buttonStyles } from "@/shared/ui/Button/styles";

interface ButtonProps {
    disabled: AButtonProps["disabled"];
    type: AButtonProps["type"];
}

const Button: FC<ButtonProps> = ({ children, type, disabled }) => {

    return (
        <AButton
            type={type || "default"}
            style={buttonStyles}
            disabled={!!disabled}
        >
            {children}
        </AButton>
    );
};

export default Button;
