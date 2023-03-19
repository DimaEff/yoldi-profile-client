import { ThemeConfig } from "antd";

import { COLORS_BY_THEMES, DEFAULT_FONT_SIZE } from "./constants";

const { light } = COLORS_BY_THEMES;

const lightConfig: ThemeConfig = {
    token: {
        colorPrimary: light.primary,
        colorBgContainer: light.bg_primary,
        colorBgLayout: light.bg_secondary,
        colorBgContainerDisabled: light.strokes_primary,
        colorText: light.txt_primary,
        colorTextSecondary: light.txt_secondary,
        colorTextLightSolid: light.txt_secondary,
        colorTextDisabled: light.bg_secondary,
        colorBorder: light.strokes_primary,
        colorBorderSecondary: light.strokes_secondary,
        colorError: light.error,
    },
    components: {
        Button: {
            boxShadow: "none",
            padding: 12,
            controlHeight: 50,
            controlOutlineWidth: 200,
            fontWeightStrong: 500,
        },
    },
};

export default lightConfig;
