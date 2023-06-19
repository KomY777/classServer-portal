import React, {useState} from "react";
import {Button, Form, Input, Menu, MenuProps, message} from "antd";
import {ContentLine, GoLogin, SelectIdentity, TitleSI, Wrapper} from "./styled";
import {Link, useNavigate} from "react-router-dom";
import {log} from "util";


interface setStudentNumber {
    teacherStyledBorder: any
    studentStyledBorder: any
    isHave: string
    isRequired: boolean
}


export default () => {

    const [from] = Form.useForm();
    const [identity, setIdentity] = useState(0);

    //对学号表单的控制。
    const [changeStudentNumber, setChangeStudentNumber] = useState<setStudentNumber>({
        teacherStyledBorder: {
            border: "#4285f4 1px solid"
        },
        studentStyledBorder: {},
        isHave: "none",
        isRequired: false,
    })

    const onFinish = (values: any) => {
        console.log(values)
        console.log(identity)
        message.success("注册成功")
    };

    const onFinishFailed = (errorInfo: any) => {
        message.error("注册失败")
    };
    const haveStudentNumber = (value: boolean) => {
        from.resetFields();
        if (value) {
            setIdentity(0)
            console.log("教师")
            setChangeStudentNumber({
                teacherStyledBorder: {
                    border: "#4285f4 1px solid"
                },
                studentStyledBorder: {},
                isHave: "none",
                isRequired: false,
            })
        } else {
            setIdentity(1)
            console.log("学生")
            setChangeStudentNumber({
                teacherStyledBorder: {},
                studentStyledBorder: {
                    border: "#4285f4 1px solid"
                },
                isHave: "block",
                isRequired: true,
            })
        }
    }

    return (
        <Wrapper>
            <div
                style={{
                    textAlign: "center",
                    fontSize: "20px",
                    marginBottom: "20px"
                }}
            >注册账号
            </div>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={from}
            >
                <Form.Item
                    label=""
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: '请输入邮箱/手机号!',
                        },
                    ]}
                >
                    <Input placeholder="请输入邮箱/手机号"/>
                </Form.Item>
                <Form.Item
                    label=""
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '密码安全强度不足!',
                        },
                    ]}
                >
                    <Input.Password placeholder="请输入密码"/>
                </Form.Item>
                <Form.Item
                    label=""
                    name="passwordTwo"
                    rules={[
                        {
                            required: true,
                            message: '两次输入密码不相同!',
                        },
                    ]}
                >
                    <Input.Password placeholder="请再次输入密码确认"/>
                </Form.Item>
                <SelectIdentity>
                    <TitleSI>选择身份</TitleSI>
                    <ContentLine>
                        <Button onClick={() => haveStudentNumber(true)} className="ButtonTeacher"
                                style={changeStudentNumber.teacherStyledBorder}>老师</Button>
                        <Button onClick={() => haveStudentNumber(false)} className="ButtonStudent"
                                style={changeStudentNumber.studentStyledBorder}>学生</Button>
                    </ContentLine>
                </SelectIdentity>
                <Form.Item
                    label=""
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: '请输入姓名!',
                        },
                    ]}
                >
                    <Input placeholder="请输入姓名"/>
                </Form.Item>
                <Form.Item
                    label=""
                    name="school"
                    rules={[
                        {
                            required: true,
                            message: '请选择学校!',
                        },
                    ]}
                >
                    <Input placeholder="请输入学校/机构"/>
                </Form.Item>
                <Form.Item
                    label=""
                    name="studentNumber"
                    style={{
                        display: `${changeStudentNumber.isHave}`
                    }}
                    rules={[
                        {
                            required: changeStudentNumber.isRequired,
                            message: '请输入学号!',
                        },
                    ]}
                >
                    <Input placeholder="请输入学号"/>
                </Form.Item>
                <Button
                    type="primary"
                    className="ButtonEnroll"
                    htmlType="submit"
                >注册</Button>
                <GoLogin>
                    <p style={{
                        display: "inline-block"
                    }}>已有账号？</p>
                    <Link
                        className="loginButton"
                        to="/login/user"
                    >去登录</Link>
                </GoLogin>
            </Form>
        </Wrapper>
    )
}