import React from "react";
import {Wrapper, WrapperBottom, WrapperChild} from "./styled";
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "../Login/Login";
import Enroll from "../Enroll";
import ForgotPassword from "../ForgotPassword";



export default (
) => {
    return (
        <Wrapper>
            <WrapperChild>
                <WrapperBottom>
                    <Routes>
                        <Route path={"user"} element={<Login/>}/>
                        <Route path={"enroll"} element={<Enroll/>}/>
                        <Route path={"forgetPassword"} element={<ForgotPassword/>}/>
                    </Routes>
                </WrapperBottom>
            </WrapperChild>
        </Wrapper>
    )
}