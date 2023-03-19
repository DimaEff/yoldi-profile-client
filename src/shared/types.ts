import { CSSProperties } from "react";

export interface Props<T = unknown> {
    props: T;
}

export const colorsTypes = [
    "primary",
    "txt_primary",
    "txt_secondary",
    "txt_light",
    "bg_primary",
    "bg_secondary",
    "strokes_primary",
    "strokes_secondary",
    "error",
] as const;
export type ColorsTypes = (typeof colorsTypes)[number];
export type ColorByType = Record<ColorsTypes, string>;

export type GetStyles<T extends object = unknown> = (args: T) => CSSProperties;
