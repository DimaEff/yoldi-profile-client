import { Themes } from "@/app/theme/types";
import { ColorByType } from "@/shared/types";

export const COLORS_BY_THEMES: Record<Themes, ColorByType> = {
    light: {
        primary: "#000",
        txt_primary: "#000",
        txt_secondary: "#FFF",
        txt_light: "#838383",
        bg_primary: "#FFF",
        bg_secondary: "#F3F3F3",
        strokes_primary: "#D5D5D5",
        strokes_secondary: "#E6E6E6",
        error: "#F00000",
    },
} as const;

export const DEFAULT_FONT_SIZE = 16;
export const DEFAULT_LINE_HEIGHT = "160%";

