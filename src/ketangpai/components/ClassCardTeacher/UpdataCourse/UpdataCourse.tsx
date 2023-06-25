import React, {useEffect} from "react";
import {Button, Form, Input, message, Modal, Select} from "antd";
import {toNumber} from "lodash";
import {Ketangpai_COURSE_UPDATECOURSE} from "../../../../api/ketangpai/CourseManagement";




export interface cardData {
    id: string,
    courseName: string,
    className: string,
    courseState: string,
    teacherId: string,
    academicYear: string,
    semester: string,
    courseCode: string,
}



interface Props{
    openUpdate:boolean
    setOpenUpdate:any;
    courseDefault:cardData;
}


export default (
    {
        openUpdate,
        setOpenUpdate,
        courseDefault,
    }:Props
) => {

    console.log(courseDefault)

    const [from] = Form.useForm();


    useEffect(()=>{
        from.setFieldValue("CourseName",courseDefault.courseName)
        from.setFieldValue("teachingClass",courseDefault.className)
        from.setFieldValue("selectSchoolYear",courseDefault.academicYear)
        from.setFieldValue("semester",courseDefault.semester)
    },[])



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
        setOpenUpdate(false);
    };

    // 表单验证成功
    const onFinish = (values: any) => {
        const course={
            id:courseDefault.id,
            courseName:values.CourseName,
            className:values.teachingClass,
            courseState:courseDefault.courseState,
            teacherId:localStorage.getItem("userId"),
            academicYear:values.selectSchoolYear,
            semester:values.semester
        }
        Ketangpai_COURSE_UPDATECOURSE(course).then(req=>{
            window.location.reload()
        })
    };


    return (
        <Modal
            onCancel={handleCancel}
            title="创建课程"
            open={openUpdate}
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