import React from "react";

import { AuthLink } from "@/features/Auth";
import { Footer, Header } from "@/shared/Layout";
import Content from "@/shared/Layout/Content";
import { RedirectButton } from "@/shared/ui/Link";
import { SIGN_UP } from "@/shared/paths";

const SignIn = () => {
    return (
        <>
            <Header
                rightSlot={
                    <RedirectButton to={SIGN_UP}>
                        Зарегестрироваться
                    </RedirectButton>
                }
            />
            <Content colorType="bg_secondary">
                <div>123123</div>
            </Content>
            <Footer>
                <AuthLink
                    description="Еще нет аккаунта?"
                    lintText="Зарегестрироваться!"
                    to={SIGN_UP}
                />
            </Footer>
        </>
    );
};

export default SignIn;
