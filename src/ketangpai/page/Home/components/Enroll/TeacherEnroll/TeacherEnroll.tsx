import {Button, Checkbox, Form, Input, InputNumber, Menu, MenuProps, message, Select} from "antd";
import React from "react";
import {Wrapper, WrapperChild} from "./styled";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";


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

const items: MenuItem[] = [
    getItem('教师', 'teacher'),
    getItem('学生', 'student'),
];


export default () => {

    const navigate = useNavigate();

    const onClickReturn = (e: any) => {
        navigate("/", {replace: true})
        // navigate(-1)
    }

    const onFinish = (values: any) => {
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

    const onFinishFailed = (errorInfo: any) => {
        message.error("注册失败")
    };

    return (
        <Wrapper>
            <WrapperChild>
                <Form
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Button
                        onClick={onClickReturn}
                    >
                        返回
                    </Button>教师注册
                    <Form.Item
                        style={{marginTop:"20px"}}
                        name="nickname"
                        rules={[
                            {
                                message: '请输入昵称',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="nickname"/>
                    </Form.Item>

                    <Form.Item
                        style={{marginTop:"20px"}}
                        name="account"
                        rules={[
                            {
                                required: true,
                                message: '请输入账号',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            style={{marginRight: "10px"}}
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </WrapperChild>
        </Wrapper>
    )
}