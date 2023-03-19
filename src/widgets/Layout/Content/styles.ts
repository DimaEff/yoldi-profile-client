import { CSSProperties } from "react";

export const contentStyles: (color: string) => CSSProperties = color => ({
    color,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
});

export const innerContainerStyles: CSSProperties = {
    maxWidth: "800px",
};
