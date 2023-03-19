import React from "react";
import Image from "next/image";

import logo from "public/logo-wrapper.svg";

import Box from "@/shared/ui/Box";
import { Paragraph } from "@/shared/ui/Typography";

const Logo = () => {
    return (
        <Box style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Image src={logo} alt="logo" />
            <Box style={{ width: "230px" }}>
                <Paragraph noMargin>
                    Разрабатываем и запускаем сложные веб проекты
                </Paragraph>
            </Box>
        </Box>
    );
};

export default Logo;
