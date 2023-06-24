import React from "react";
import {Menu, MenuProps} from "antd";
import Top from "./components/Top";
import {Wrapper} from "./styled";
import {Route, Routes, useNavigate} from "react-router-dom";
import Detail from "./components/Detail";
import SubmitJob from "./components/SubmitJob";


export default () => {

    const navigate = useNavigate();

    const onClick = (e: any) => {
        navigate(e.key, {replace: true})
    }


    const items: MenuProps['items'] = [
        {
            label: '详情',
            key: '/teacher/homeWork/detail',
        },
        {
            label: '批改作业',
            key: '/teacher/homeWork/SubmitJob',
        },
    ];


    return (
        <Wrapper>
            <Top/>
            <Menu
                onClick={onClick}
                style={{
                    fontSize: "18px",
                    marginTop: "90px",
                    marginBottom: "20px",
                }}
                mode="horizontal"
                items={items}
            />
            <Routes>
                <Route path="detail" element={<Detail/>}/>
                <Route path="submitJob" element={<SubmitJob/>}/>
            </Routes>
        </Wrapper>
    )
}