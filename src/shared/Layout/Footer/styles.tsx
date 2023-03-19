import { CSSProperties } from "react";

import { BORDER_STYLES } from "@/shared/Layout/styles";

export const footerStyles = (
    bgColor: string,
    borderColor: string
): CSSProperties => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "72px",
    backgroundColor: bgColor,
    borderTop: BORDER_STYLES(borderColor),
});
