import React, { FC, PropsWithChildren } from "react";

import useColor from "@/shared/hooks/useColor";
import { ColorsTypes } from "@/shared/types";

interface BoxProps {
    colorType?: ColorsTypes;
}

const Box: FC<
    PropsWithChildren<BoxProps & React.HTMLAttributes<HTMLDivElement>>
    // eslint-disable-next-line react/prop-types
> = ({ children, colorType, style, ...props }) => {
    const color = useColor(colorType);

    return (
        <div
            style={{ backgroundColor: color || "transparent", ...style }}
            {...props}
        >
            {children}
        </div>
    );
};

export default Box;
