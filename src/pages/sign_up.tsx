import React from "react";

import { AuthLink } from "@/features/Auth";
import { Footer, Header } from "@/shared/Layout";
import Content from "@/shared/Layout/Content";
import { RedirectButton } from "@/shared/ui/Link";
import { SIGN_IN } from "@/shared/paths";

const SignUp = () => {
    return (
        <>
            <Header
                rightSlot={<RedirectButton to={SIGN_IN}>Войти</RedirectButton>}
            />
            <Content colorType="bg_secondary">
                <div>123123</div>
            </Content>
            <Footer>
                <AuthLink
                    description="Уже есть аккаунт?"
                    lintText="Войти!"
                    to={SIGN_IN}
                />
            </Footer>
        </>
    );
};

export default SignUp;
