import React, { FC, PropsWithChildren } from "react";

import useColor from "@/shared/hooks/useColor";
import { ColorsTypes } from "@/shared/types";

interface BoxProps {
    colorType: ColorsTypes;
}

const Box: FC<PropsWithChildren<BoxProps & HTMLDivElement>> = ({
    children,
    colorType,
    ...props
}) => {
    const color = useColor(colorType);

    return (
        <div style={{ backgroundColor: color }} {...props}>
            {children}
        </div>
    );
};

export default Box;
