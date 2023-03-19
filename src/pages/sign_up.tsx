import React from "react";
import { Card } from "antd";

import { AuthLink } from "@/features/Auth";
import { Footer, Header } from "@/shared/Layout";
import { SIGN_IN } from "@/shared/paths";
import { RedirectButton } from "@/shared/ui/Link";
import { GuestContent } from "@/widgets/Auth";

const SignUp = () => {
    return (
        <>
            <Header
                rightSlot={<RedirectButton to={SIGN_IN}>Войти</RedirectButton>}
            />
            <GuestContent>
                <Card>123123</Card>
            </GuestContent>
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
