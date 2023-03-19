import React from "react";
import { Card } from "antd";

import { AuthLink } from "@/features/Auth";
import { Footer, Header } from "@/shared/Layout";
import { SIGN_UP } from "@/shared/paths";
import { RedirectButton } from "@/shared/ui/Link";
import { GuestContent } from "@/widgets/Auth";

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
            <GuestContent>
                <Card>123</Card>
            </GuestContent>
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
