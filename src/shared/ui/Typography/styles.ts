import { CSSProperties } from "react";

import {
    TITLE_WEIGHT,
    LINE_HEIGHT,
    WEIGHT,
    TITLE_LINE_HEIGHT,
} from "@/shared/styles";

export const titleStyles: CSSProperties = {
    fontWeight: TITLE_WEIGHT,
    fontSize: 30,
    lineHeight: TITLE_LINE_HEIGHT,
};

export const subtitleStyles: CSSProperties = {
    fontWeight: WEIGHT,
    fontSize: 18,
    lineHeight: TITLE_LINE_HEIGHT,
};

export const getParagraphStyles: (
    color: string,
    mini: boolean,
    noMargin: boolean
) => CSSProperties = (color, mini, noMargin) => ({
    color,
    fontWeight: WEIGHT,
    fontSize: mini ? 12 : 16,
    lineHeight: LINE_HEIGHT,
    marginBottom: noMargin ? 0 : "16px",
    fontStyle: "normal",
});

export const buttonTextStyles: CSSProperties = {
    fontSize: 16,
    fontWeight: TITLE_WEIGHT,
    lineHeight: LINE_HEIGHT,
};
