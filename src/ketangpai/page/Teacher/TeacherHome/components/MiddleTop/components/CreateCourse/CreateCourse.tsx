import React from "react";
import {Button, Form, Input, message, Modal, Select} from "antd";
import {Ketangpai_COURSE_ADDCOURSE} from "../../../../../../../../api/ketangpai/CourseManagement";
import {toNumber} from "lodash";

interface Props{
    openCreateCourse:boolean
    setOpenCreateCourse:any;
}


export default (
    {
        openCreateCourse,
        setOpenCreateCourse,
    }:Props
) => {

    const [from] = Form.useForm();


    const selectSchoolYear = [
        "2020-2021",
        "2021-2022",
        "2022-2023",
        "2023-2024",
        "2024-2025"
    ]

    const semester = [
        "全年",
        "第一学期",
        "第二学期",
    ]


    const handleCancel = () => {
        setOpenCreateCourse(false);
    };

    // 表单验证成功
    const onFinish = (values: any) => {
        const Course = {
            "courseName": values.CourseName,
            "className": values.teachingClass,
            "courseState": 0,
            "teacherId": Number(localStorage.getItem("userId")),
            "semester": values.semester,
            "academicYear": values.selectSchoolYear,
        }

        Ketangpai_COURSE_ADDCOURSE(Course).then(req=>{
            const {data} = req
            if (data.code == 200){
                message.success("创建课程成功")
                console.log('Success:', Course)
            }else {
                message.error("创建课程失败")
            }
            console.log(req.data)
        })
        setOpenCreateCourse(false)
    };


    return (
        <Modal
            onCancel={handleCancel}
            title="创建课程"
            open={openCreateCourse}
            footer={null}
            destroyOnClose={true}
            cancelText="a"
            centered={true}
        >
            <Form
                form={from}
                onFinish={onFinish}
            >
                <Form.Item
                    name="CourseName"
                    label="课程名称"
                    validateFirst={true}

                    rules={[
                        {required: true, message: "必填项"}
                    ]}
                >
                    <Input showCount maxLength={50} placeholder=""/>
                </Form.Item>
                <Form.Item
                    name="teachingClass"
                    label="教学班级"
                    validateFirst={true}

                    rules={[
                        {required: true, message: "必填项"}
                    ]}
                >
                    <Input showCount maxLength={30} placeholder=""/>
                </Form.Item>
                <Form.Item
                    style={{
                        display: "inline-block",
                        width: "210px"
                    }}
                    name="selectSchoolYear"
                    label="学年"
                    validateFirst={true}
                    rules={[
                        {required: true, message: "必填项"}
                    ]}
                >
                    <Select
                        options={
                            selectSchoolYear.map((item, index) => ({
                                label: item, value: item,
                            }))}
                    />
                </Form.Item>
                <Form.Item
                    style={{
                        display: "inline-block",
                        width: "210px",
                        float: "right"
                    }}
                    name="semester"
                    label="学期"
                    validateFirst={true}

                    rules={[
                        {required: true, message: "必填项"}
                    ]}
                >
                    <Select
                        options={
                            semester.map((item) => ({
                                label: item, value: item,
                            }))}
                    />
                </Form.Item>
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