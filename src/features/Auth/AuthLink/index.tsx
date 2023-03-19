import React, { FC } from "react";

import Box from "@/shared/ui/Box";
import Link from "@/shared/ui/Link";
import { Paragraph } from "@/shared/ui/Typography";

interface AuthTextProps {
    infoText: string;
    lintText: string;
    to: string;
}

const AuthLink: FC<AuthTextProps> = ({ infoText, lintText, to }) => {
    return (
        <Box style={{ display: "flex", gap: "5px" }}>
            <Paragraph noMargin>{infoText}</Paragraph>
            <Link href={to}>{lintText}</Link>
        </Box>
    );
};

export default AuthLink;
