import { CSSProperties } from "react";
import { SizeType } from "antd/es/config-provider/SizeContext";

import { buttonTextStyles } from "@/shared/ui/Typography";

type ExistsSize = Exclude<SizeType, undefined>;

const stylesByButtonType: Record<ExistsSize, CSSProperties> = {
    small: {
        height: "40px",
        padding: "7px 33px",
    },
    middle: {
        height: "50px",
        padding: "12px 33px",
    },
    // unused now
    large: {
        height: "50px",
        padding: "12px 33px",
    },
};

export const buttonStyles = (
    size: ExistsSize,
    fullWidth: boolean
): CSSProperties => ({
    padding: 12,
    height: 50,
    width: fullWidth ? "100%" : "auto",
    ...stylesByButtonType[size],
    ...buttonTextStyles,
});
