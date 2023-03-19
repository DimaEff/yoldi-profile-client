import React from "react";

import { AuthLink } from "@/features/Auth";
import { Footer } from "@/widgets/Layout";

const SignUpFooter = () => {
    return (
        <Footer>
            <AuthLink
                infoText="Уже есть аккаунт?"
                lintText="Войти!"
                to="/login"
            />
        </Footer>
    );
};

export default SignUpFooter;
