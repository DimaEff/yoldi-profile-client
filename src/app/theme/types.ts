const themes = ["light"] as const;
export type Themes = (typeof themes)[number];
