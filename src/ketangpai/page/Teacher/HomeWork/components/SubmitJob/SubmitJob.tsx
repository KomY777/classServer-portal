import React, {useEffect, useState} from "react";
import imgWork from "../../../../../../Static/img_1.png";
import {BottomFrame, CodeImg, Description, DescriptionRight, LeftButton, TitleByCourse} from "./styled";
import {Button, Divider, Form, Input, message, Upload, UploadProps} from "antd";
import {DownloadOutlined, UploadOutlined} from "@ant-design/icons";
import {promises} from "fs";
import {
    Ketangapi_STUDENTHOMEWORK_VIEWCOMMIT, Ketangpai_STUDENTHOME_WARKING,
    Ketangpai_STUDENTHOMEWORK_CORRECTING,
    Ketangpai_STUDENTHOMEWORK_CREATHOMEWORK
} from "../../../../../../api/ketangpai/HomeWork";
import TextArea from "antd/es/input/TextArea";
import axios from "axios/index";

interface homework {
    title: string,
    endTime: string,
}

interface asd {
    id: string,
    commitState: string,
    filePath: string,
    grade: string,
    homeworkId: string,
    studentId: string,
    remark: string,
}

export default () => {


    const [from] = Form.useForm();

    const [homeWorkData, setHomeWorkData] = useState<homework>({
        title: "",
        endTime: "",
    });


    const [studentData, setStudentData] = useState("");
    const [dataAAA, setDataAAA] = useState<asd>({
        id: "",
        commitState: "",
        filePath: "",
        grade: `${localStorage.getItem("grade")}`,
        homeworkId: "",
        studentId: "",
        remark: "",
    });


    useEffect(() => {
        Ketangpai_STUDENTHOMEWORK_CORRECTING(`${localStorage.getItem("homeworkId")}`).then(req => {
            if (req.data.code == 200) {
                const dataA = req.data.data
                setHomeWorkData({
                    title: dataA.title,
                    endTime: dataA.endTime,
                })
            }
        })
        Ketangapi_STUDENTHOMEWORK_VIEWCOMMIT(localStorage.getItem("studentHomeworkId")).then(req => {
            const {data} = req
            if (data.code == 200) {
                setDataAAA(data.data)
            }
        })
    }, [])


    const onFinish = (values: any) => {
        const AAAA = {
            id: dataAAA.id,
            commitState: "1",
            filePath: "",
            grade: values.grades,
            homeworkId: dataAAA.homeworkId,
            studentId: dataAAA.studentId,
            remark: dataAAA.remark,
        }
        localStorage.setItem("grade",values.grades)
        Ketangpai_STUDENTHOME_WARKING(AAAA).then(req => {
            const {data} = req;
            if (data.code == 200) {
                message.success("批改成功")
            } else {
                message.error("批改失败")
            }
        })
    };


    return (
        <div>
            <div
                style={{
                    height: "100px",
                    margin: "0",
                    borderBottom: " 2px gainsboro solid",
                }}
            >
                <CodeImg>
                    <img src={imgWork}/>
                    <div>作业</div>
                </CodeImg>
                <DescriptionRight>
                    <TitleByCourse>{homeWorkData.title}</TitleByCourse>
                    <Description>
                        <Button
                            className="buttonD"
                        >个人作业</Button>
                        <Button
                            className="buttonD"
                        >提交起止时间：{homeWorkData.endTime}</Button>
                        <Button
                            className="unButtonD"
                        >100分</Button>
                    </Description>
                </DescriptionRight>
            </div>
            <LeftButton>提交内容</LeftButton>
            <BottomFrame>
                <div
                    style={{
                        display: "inline-black"
                    }}
                >学生留言：
                </div>
                <TextArea
                    disabled={true}
                    value={`${studentData}`}
                />
                <Form
                    form={from}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        grades:dataAAA.grade
                    }}
                >
                    <Form.Item
                        name="grades"
                        label="成绩"
                        validateFirst={true}
                        rules={[
                            {
                                required: true,
                                message: '未评分!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <div
                        className="workName"
                    >作业附件
                    </div>
                    <div
                        style={{
                            marginTop: "20px"
                        }}
                    >
                        <Button icon={<DownloadOutlined/>}>下载查看作业</Button>
                    </div>
                    <Button
                        style={{
                            marginTop: "20px"
                        }}
                        htmlType="submit"
                    >
                        确认批改
                    </Button>
                </Form>
            </BottomFrame>
        </div>
    )
}