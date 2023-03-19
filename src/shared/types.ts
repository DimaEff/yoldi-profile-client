export interface Props<T = unknown> {
    props: T;
}

const colors = [
    "primary",
    "txt_primary",
    "txt_secondary",
    "bg_primary",
    "bg_secondary",
    "strokes_primary",
    "strokes_secondary",
    "error",
] as const;
export type ColorsTypes = (typeof colors)[number];
export type ColorByType = Record<ColorsTypes, string>;
