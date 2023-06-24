import React, {useState} from "react";
import {Button, DatePicker, Form, Input, Radio, message, Modal, Select, Switch} from "antd";
import {Ketangpai_COURSE_ADDCOURSE} from "../../../../../../../../../api/ketangpai/CourseManagement";
import TextArea from "antd/es/input/TextArea";
import type {DatePickerProps, RadioChangeEvent} from 'antd';
import Dragger from "antd/es/upload/Dragger";
import {InboxOutlined} from "@ant-design/icons";
import {Ketangpai_STUDENTHOMEWORK_CREATHOMEWORK} from "../../../../../../../../../api/ketangpai/HomeWork";
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const {RangePicker} = DatePicker;


interface Props {
    openCreateCourse: boolean
    setOpenCreateCourse: any;
}


export default (
    {
        openCreateCourse,
        setOpenCreateCourse,
    }: Props
) => {

    const [from] = Form.useForm();
    const [addTime, setAddTime] = useState("none")
    const [homeworkState, setHomeworkState] = useState("0")

    const changeTime = () => {
        if (addTime === "none") {
            setHomeworkState("1")
            setAddTime("inline-flex")
        } else {
            setHomeworkState("0")
            setAddTime("none")
        }
    }

    const handleCancel = () => {
        setOpenCreateCourse(false);
    };

    // 表单验证成功
    const onFinish = (values: any) => {
        const Course = {
            // courseId:
            title: values.CourseName,
            className: values.teachingClass,
            courseState: 0,
            teacherId: Number(localStorage.getItem("userId")),
            semester: values.semester,
            academicYear: values.selectSchoolYear,
        }

        Ketangpai_STUDENTHOMEWORK_CREATHOMEWORK(Course).then(req => {
            const {data} = req
            if (data.code == 200) {
                message.success("添加作业成功")
                console.log('Success:', Course)
            } else {
                message.error("添加作业失败")
            }
            console.log(req.data)
        })
        setOpenCreateCourse(false)
    };

    const onChangeFile=(info:any)=> {
        console.log(info.fileList[0].name)
    }
    return (
        <Modal
            onCancel={handleCancel}
            title="添加作业"
            open={openCreateCourse}
            footer={null}
            destroyOnClose={true}
            cancelText="a"
            centered={true}
        >
            {/*<div>基本信息</div>*/}
            <Form
                form={from}
                // name="validateOnly"
                layout="vertical"
                // autoComplete="off"
                onFinish={onFinish}
            >
                <Form.Item
                    name="CourseName"
                    label="作业标题"
                    validateFirst={true}

                    rules={[
                        {required: true, message: "必填项"}
                    ]}
                >
                    <Input showCount maxLength={50} placeholder=""/>
                </Form.Item>
                <Form.Item
                    name="addClassCode"
                    label="备注"
                    validateFirst={true}
                >
                    <TextArea showCount maxLength={200} placeholder=""/>
                </Form.Item>
                <div>
                    <Dragger
                    onChange={(e)=>onChangeFile(e)}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">请点击选择上传文件</p>
                    </Dragger>

                    <Switch
                        style={{
                            margin: "10px 0px"
                        }}
                        onClick={changeTime}
                        checkedChildren="发布"
                        unCheckedChildren="未发布"
                        defaultChecked={false}
                    />
                    <RangePicker
                        style={{
                            width: "100%",
                            display: `${addTime}`
                        }}
                        showTime={{format: 'HH:mm'}}
                        // format="yyyy-MM-dd HH:mm:ss"
                        format="YYYY-MM-DD HH:mm:ss"
                        onChange={(e) => {
                            // @ts-ignore
                            console.log(moment(e._d).format("YYYY-MM-DD HH:mm:ss"))

                        }
                        }
                    />
                </div>
                <Form.Item style={{
                    marginLeft: "130px"
                }}>
                    <Button
                        htmlType="submit"
                        onClick={handleCancel}
                    >
                        取消
                    </Button>
                    <Button
                        style={{marginLeft: "50px"}}
                        htmlType="submit"
                        type="primary"
                    >
                        确定
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}