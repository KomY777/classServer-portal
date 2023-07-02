import React from "react";
import {Button, Checkbox, Form, Input, Menu, MenuProps} from "antd";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {
    LoginButton,
    GoLogin,
    Wrapper
} from "./styled";


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
    getItem('手机短信登录', "/login/phone", null,),
    getItem('微信登录', "/login/weCat", null,)
];

export default () => {

    const navigate = useNavigate();

    const onGotoEnroll = () => {
        navigate("/login/enroll", {replace: true})

    }
    const onClickLogin = (e: any) => {
        console.log(e.key)
        navigate(e.key, {replace: true})
    }
    const onClickEnroll = (e: any) => {
        console.log(e.key)
        navigate(e.key, {replace: true})
    }






    const onFinish = (values: any) => {
        const user = {
            userName: values.UserName,
            password: values.Password
        }

        console.log(user)

        axios.get('/user',
            {
                data:{
                    username:'admin',
                    password:123
                }
            }
        ).then(res => {
            console.log(res.data)
            navigate("/studentHome",{replace: true})
        })
    };

    return (
        <Wrapper>
            <div
                style={{
                    textAlign:"center",
                    fontSize:'20px'
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
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="验证码"
                    name="Password"
                    rules={[
                        {
                            required: true,
                            message: '请输入验证码!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button
                    htmlType="submit"
                    style={LoginButton} type="primary">确定</Button>
                <GoLogin>
                    <p style={{
                        display:"inline-block"
                    }}>返回登陆？</p>
                    <Link
                        className="loginButton"
                        to="/login/user"
                    >去登录</Link>
                </GoLogin>
            </Form>
        </Wrapper>
    )
}