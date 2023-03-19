import React from "react";

import { AuthLink } from "@/features/Auth";
import { Footer } from "@/widgets/Layout";

const SignInFooter = () => {
    return (
        <Footer>
            <AuthLink
                infoText="Еще нет аккаунта?"
                lintText="Зарегестрироваться!"
                to="/registration"
            />
        </Footer>
    );
};

export default SignInFooter;
