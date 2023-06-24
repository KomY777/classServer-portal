import React, {useEffect, useState} from "react";
import {
    AnotherFunction,
    AnotherFunctionLeft,
    EnrollButton,
    EnrollUser,
    LoginButton,
    Wrapper,
} from "./styled";
import {Button, Checkbox, Form, Input, Menu, MenuProps, message} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Ketangpai_USER_LOGIN} from "../../../../../api/ketangpai/Login/index"
import {useForm} from "antd/es/form/Form";

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
    getItem('账号登录', "/login/user", null,),
    // getItem('手机短信登录', "/login/phone", null,),
    // getItem('微信登录', "/login/weCat", null,)
];

export default () => {

    const navigate = useNavigate();
    const [saveUserName, setSaveUserName] = useState(false);
    const [from] = Form.useForm();

    useEffect(()=>{
        if (localStorage.getItem("username")!=null){
            from.setFieldValue("UserName",`${localStorage.getItem("username")}`)
            from.setFieldValue("Password",`${localStorage.getItem("password")}`)
        }
    })

    const onGotoEnroll = () => {
        navigate("/login/enroll", {replace: true})
    }
    const onClickLogin = (e: any) => {
        navigate(e.key, {replace: true})
    }
    const onClickEnroll = (e: any) => {
        navigate(e.key, {replace: true})
    }

    const onFinish = (values: any) => {
        const user = {
            userName: values.UserName,
            password: values.Password,
        }
        Ketangpai_USER_LOGIN(user).then(req => {
            const {data} = req;
            console.log(data)
            if (data.code === 200) {
                if (saveUserName) {
                    localStorage.setItem("username", user.userName);
                    localStorage.setItem("password", user.password);
                }else {
                    from.setFieldValue("UserName",null)
                    from.setFieldValue("Password",null)
                }
                localStorage.setItem("userId", data.data.id);
                if (data.data.identity === 0) {
                    navigate("/teacher/teacherHome", {replace: true})
                } else {
                    navigate("/student/studentHome", {replace: true})
                }
                message.success(data.msg)
            }else {
                message.error(data.msg)
            }
            localStorage.setItem("automaticLogin",`${saveUserName}`)
        })
    };

    return (
        <Wrapper>
            <div
                style={{
                    textAlign: "center",
                    fontSize: '20px'
                }}
            >
                账号登录
            </div>
            <Menu
                style={{
                    width: "300px",
                    position: "relative",
                    left: "30px"
                }}
                mode="horizontal"
                items={itemsLogin}
                onClick={onClickLogin}
            />
            <Form
                form={from}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="账号"
                    name="UserName"
                    rules={[
                        {
                            required: true,
                            message: '请输入账号!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="Password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <AnotherFunction>
                    <AnotherFunctionLeft>
                        <Checkbox onChange={() => {
                            setSaveUserName(!saveUserName)
                        }}/>&nbsp;&nbsp;下次自动登录
                    </AnotherFunctionLeft>
                    <AnotherFunctionLeft></AnotherFunctionLeft>
                </AnotherFunction>
                <Button
                    htmlType="submit"
                    style={LoginButton} type="primary">登录</Button>
                <EnrollUser>
                    <p style={{display: "inline-block"}}>还没有账号？</p>
                    <Button style={EnrollButton} onClick={onGotoEnroll}>去注册</Button>
                </EnrollUser>
                <EnrollUser>
                    <p style={{display: "inline-block"}}>忘记密码？</p>
                    <Button style={EnrollButton} onClick={() => {
                        navigate("/login/forgetPassword", {replace: true})
                    }}>找回密码</Button>
                </EnrollUser>
            </Form>
        </Wrapper>
    )
}