import { ThemeConfig } from "antd";

import { COLORS_BY_THEMES } from "./constants";

const { light } = COLORS_BY_THEMES;

const lightConfig: ThemeConfig = {
    token: {
        colorPrimary: light.primary,
        colorBgContainer: light.bg_primary,
        colorBgLayout: light.bg_secondary,
        colorText: light.txt_primary,
        colorTextSecondary: light.txt_secondary,
        colorBorder: light.strokes_primary,
        colorBorderSecondary: light.strokes_secondary,
        colorError: light.error,
    },
};

export default lightConfig;
