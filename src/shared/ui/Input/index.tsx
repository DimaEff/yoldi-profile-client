import React, { FC } from "react";
import { Input as AInput, InputProps } from "antd";

import s from "./styles.module.scss";

const Input: FC<InputProps> = props => {
    return <AInput {...props} rootClassName={s.input} />;
};

export default Input;
