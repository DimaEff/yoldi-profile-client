import React, { FC, PropsWithChildren } from "react";
import { LinkProps } from "next/link";
import { useRouter } from "next/router";

import Button from "@/shared/ui/Button";

interface RedirectButtonProps {
    to: LinkProps["href"];
}

const RedirectButton: FC<PropsWithChildren & RedirectButtonProps> = ({
    children,
    to,
}) => {
    const router = useRouter();

    return (
        <Button size="small" onClick={() => router.push(to)}>
            {children}
        </Button>
    );
};

export default RedirectButton;
