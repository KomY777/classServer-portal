import {Button, Checkbox, Form, Input, InputNumber, Menu, MenuProps, message, Select} from "antd";
import React from "react";
import {Wrapper, WrapperChild} from "./styled";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Route, Routes, useNavigate} from "react-router-dom";
import StudentEnroll from "../Enroll/StudentEnroll";
import TeacherEnroll from "../Enroll/TeacherEnroll";
import StudentLogin from "../Login/StudentLogin";
import TeacherLogin from "../Login/TeacherLogin";



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const itemsLogin: MenuItem[] = [
    getItem('教师', "teacher",null,[
        getItem("登录",'/Login/teacher'),
        getItem("注册",'/Enroll/teacher'),
    ],"group"),
    getItem('学生', 'student',null,[
        getItem("登录",'/Login/student'),
        getItem("注册",'/Enroll/student')
    ],"group"),
];

const itemEnroll: MenuItem[] = [
    getItem(null,"Enroll",<Button>注册</Button>)
];


export default (
) => {

    const navigate = useNavigate();
    const onClickLogin = (e:any) => {
        console.log(e.key)
        navigate(e.key, {replace: true})
    }
    const onClickEnroll = (e:any) => {
        console.log(e.key)
        navigate(e.key, {replace: true})
    }


    const onFinish = (values : any) => {
        const user = {
            account: "",
            password: ""
        }
        if (values.account != undefined) {
            user.account = values.account;
        }
        if (values.password != undefined) {
            user.password = values.password;
        }
    };


    return (
        <Wrapper>
            <WrapperChild>
                <Menu
                    items={itemsLogin}
                    onClick={onClickLogin}
                />
                <div>
                    <Routes>
                        <Route path={"/Login/student"} element={<StudentLogin/>} />
                        <Route path={"/Login/teacher"} element={<TeacherLogin/>}/>
                        <Route path={"/Enroll/student"} element={<StudentEnroll/>} />
                        <Route path={"/Enroll/teacher"} element={<TeacherEnroll/>}/>
                    </Routes>
                </div>
            </WrapperChild>
        </Wrapper>
    )
}