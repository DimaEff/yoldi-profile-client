import { useMemo } from "react";
import { theme } from "antd";

import { ColorByType, ColorsTypes } from "@/shared/types";

const { useToken } = theme;

const useColor = (colorType: ColorsTypes): string => {
    const { token } = useToken();

    const colors = useMemo<ColorByType>(
        () => ({
            primary: token.colorPrimary,
            txt_primary: token.colorText,
            txt_secondary: token.colorTextSecondary,
            bg_primary: token.colorBgContainer,
            bg_secondary: token.colorBgLayout,
            strokes_primary: token.colorBorder,
            strokes_secondary: token.colorBorderSecondary,
            error: token.colorError,
        }),
        [
            token.colorBgContainer,
            token.colorBgLayout,
            token.colorBorder,
            token.colorBorderSecondary,
            token.colorError,
            token.colorPrimary,
            token.colorText,
            token.colorTextSecondary,
        ]
    );

    return colors[`${colorType}`];
};

export default useColor;
