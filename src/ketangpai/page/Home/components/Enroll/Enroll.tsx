import React, {useState} from "react";
import {Button, Form, Input, Menu, MenuProps, message} from "antd";
import {ContentLine, GoLogin, SelectIdentity, TitleSI, Wrapper} from "./styled";
import {Link, useNavigate} from "react-router-dom";
import {Ketangpai_USER_REGISTER, Ketangpai_USER_SENDMAIL} from "../../../../../api/ketangpai/Login/index";


interface setStudentNumber {
    teacherStyledBorder: any
    studentStyledBorder: any
    isHave: string
    isRequired: boolean
}


export default () => {

    const [from] = Form.useForm();
    const [identity, setIdentity] = useState(0);
    const [captcha,setCaptcha] = useState(undefined);
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
        const user = {
            username: values.userName,
            password: values.password,
            identity: identity,
            name: values.name,
            number:values.studentNumber,
        }
        console.log(values)
        console.log(captcha)
        if (values.Captcha === captcha){
            if (values.password === values.passwordTwo){
                Ketangpai_USER_REGISTER(user).then(req => {
                    const {data} = req;
                    console.log(data)
                    if (data.code===200){
                        message.success("注册成功")
                    }else {
                        message.error(`注册失败:${data.msg}`)
                    }
                    // console.log(req)
                })
            }else {
                message.error("两次密码输入不一致")
            }
        }else {
            message.error("输入验证码错误")
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        message.error("注册失败")
    };
    const haveStudentNumber = (value: boolean) => {
        from.resetFields();
        if (value) {
            setIdentity(0)
            // console.log("教师")
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
            // console.log("学生")
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


    const RequestVerificationCode=()=>{
        if (from.getFieldValue("userName")){
            Ketangpai_USER_SENDMAIL(from.getFieldValue("userName")).then(req=>{
                const {data} = req;
                if (data.code = 200){
                    setCaptcha(data.data)
                    console.log(data.data)
                    message.success("已发送验证码到指定邮箱，请注意查收")
                }else {
                    message.error("请求验证码失败")
                }
            })
        }else {
            message.error("请输入邮箱")
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
                        {
                            pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"格式错误"
                        }
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
                    // style={{
                    //     display: `${changeStudentNumber.isHave}`
                    // }}
                    rules={[
                        {
                            required: changeStudentNumber.isRequired,
                            message: '请输入学号/教职工号',
                        },
                    ]}
                >
                    <Input placeholder="请输入学号/教职工号"/>
                </Form.Item>
                <Form.Item
                    label=""
                    name="Captcha"
                    rules={[
                        {
                            required: changeStudentNumber.isRequired,
                            message: '请输入验证码!',
                        },
                    ]}
                >
                    <Input
                        style={{
                            width:"230px",
                            display:"inline-block",
                            marginRight:"20px"
                        }}
                        placeholder="请输入验证码"/>
                </Form.Item>
                <Button
                    style={{
                        position:"absolute",
                        top:"522px",
                        right:"120px",
                        // marginLeft:"20px",
                        width:"100px",
                        display:"inline-block"
                    }}
                    onClick={RequestVerificationCode}
                >
                    请求验证码
                </Button>
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