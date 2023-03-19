import { CSSProperties } from "react";

import { BORDER_STYLES } from "@/widgets/Layout/styles";

export const headerStyles: (
    color: string,
    borderColor: string
) => CSSProperties = (color, borderColor) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "80px",
    backgroundColor: color,
    paddingLeft: "20px",
    paddingRight: "20px",
    borderBottom: BORDER_STYLES(borderColor),
});
