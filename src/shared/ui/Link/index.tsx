import React, { FC, PropsWithChildren } from "react";
import NLink, { LinkProps as NLinkProps } from "next/link";

import { buttonTextStyles } from "@/shared/ui/Typography";

interface LinkProps {
    href: NLinkProps["href"];
}

const Link: FC<PropsWithChildren<LinkProps>> = ({ children, href }) => {
    return (
        <NLink style={buttonTextStyles} href={href}>
            {children}
        </NLink>
    );
};

export default Link;
