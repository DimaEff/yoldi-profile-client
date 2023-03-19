import { useMemo } from "react";
import { theme } from "antd";

import { ColorByType, colorsTypes, ColorsTypes } from "@/shared/types";

const { useToken } = theme;

function useColor(colorType: undefined): null;
// eslint-disable-next-line no-redeclare
function useColor(colorType: ColorsTypes): string;

// eslint-disable-next-line no-redeclare
function useColor(colorType: unknown): unknown {
    const { token } = useToken();

    const colors = useMemo<ColorByType>(
        () => ({
            primary: token.colorPrimary,
            txt_primary: token.colorText,
            txt_secondary: token.colorTextSecondary,
            txt_light: token.colorTextLightSolid,
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
            token.colorTextLightSolid,
            token.colorTextSecondary,
        ]
    );

    if (colorsTypes.includes(colorType.toString())) {
        // eslint-disable-next-line no-console
        return colors[colorType];
    }

    console.log(`Color type is ${colorType}`);

    return null;
}

export default useColor;
