import React, { FC } from "react";

import Box from "@/shared/ui/Box";
import Link from "@/shared/ui/Link/Link";
import { Paragraph } from "@/shared/ui/Typography";

interface AuthTextProps {
    description: string;
    lintText: string;
    to: string;
}

const LinkWithDescription: FC<AuthTextProps> = ({
    description,
    lintText,
    to,
}) => {
    return (
        <Box style={{ display: "flex", gap: "5px" }}>
            <Paragraph noMargin>{description}</Paragraph>
            <Link href={to}>{lintText}</Link>
        </Box>
    );
};

export default LinkWithDescription;
