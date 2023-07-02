import React, {useEffect, useState} from "react";
import imgWork from "../../../../../../Static/img_1.png";
import {BottomFrame, CodeImg, Description, DescriptionRight, LeftButton, TitleByCourse} from "./styled";
import {Button, Form, Input, message, Upload} from "antd";
import {InboxOutlined} from "@ant-design/icons";
import {
    Ketangapi_STUDENTHOMEWORK_COMMIHOMEWORK,
    Ketangpai_STUDENTHOMEWORK_CORRECTING, Ketangpain_STUDNENTHOMEWORK_GETALLHOMEWORKINFO
} from "../../../../../../api/ketangpai/HomeWork";
import Dragger from "antd/es/upload/Dragger";
import {ContentLine, GoLogin, SelectIdentity, TitleSI} from "../../../../Home/components/Enroll/styled";
import {Link} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";


interface homework {
    title: string,
    endTime: string,
}

interface codeState{
    submissionStatus:string,
    gradingStatus:string,
    gradesStatus:string,
    remarkStatus:string,
}


export default () => {

    const [from] = Form.useForm();
    const [homeworkInfo, setHomeworkInfo] = useState<codeState>({
        submissionStatus:"",
        gradingStatus:"",
        gradesStatus:"",
        remarkStatus:"",
    });

    const [homeWorkData, setHomeWorkData] = useState<homework>({
        title: "",
        endTime: "",
    });


    const onFinish = (values: any) => {
        // console.log(values)
        const homeInfo = {
            homeworkId: localStorage.getItem("homeworkId"),
            studentId: localStorage.getItem("userId"),
            remark: values.message,
            filePath: "",
            commitState: "0",
        }
        Ketangapi_STUDENTHOMEWORK_COMMIHOMEWORK(homeInfo).then(req => {
            const {data} = req;
            if (data.code == 200) {
                message.success("提交成功")
            } else {
                message.error("提交失败")
            }
        })
        window.location.reload()
    }


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
        Ketangpain_STUDNENTHOMEWORK_GETALLHOMEWORKINFO(`${localStorage.getItem("homeworkId")}`).then(req => {
            const {data} = req
            // console.log(data)
            if (data.code==200){
                const dataOne = data.data[0]
                console.log(dataOne)
                if (dataOne.commitState==1){
                    setHomeworkInfo({
                        submissionStatus:"已提交",
                        gradingStatus:"以批改",
                        gradesStatus:dataOne.grade,
                        remarkStatus:dataOne.remark,
                    })
                }else if (dataOne.commitState==1){
                    setHomeworkInfo({
                        submissionStatus:"已提交",
                        gradingStatus:"待批改",
                        gradesStatus:"暂无成绩",
                        remarkStatus:dataOne.remark,
                    })
                }else {
                    setHomeworkInfo({
                        submissionStatus:"未提交",
                        gradingStatus:"未批改",
                        gradesStatus:"暂无成绩",
                        remarkStatus:"",
                    })
                }
            }
        })

    }, [])

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
                <div>
                    <div
                        style={{
                            display: "inline-block"
                        }}
                    >
                        提交状态：
                    </div>
                    <div
                        style={{
                            display: "inline-block"
                        }}
                    >
                        {homeworkInfo.submissionStatus}
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            display: "inline-block"
                        }}
                    >
                        批改状态：
                    </div>
                    <div
                        style={{
                            display: "inline-block"
                        }}
                    >
                        {homeworkInfo.gradingStatus}
                    </div>
                </div>
                <div>
                    <div
                        className="LineTop"
                    >成绩：
                    </div>
                    <div
                        className="LineOneTopRight"
                    >{homeworkInfo.gradesStatus}
                    </div>
                </div>
                <Form
                    style={{
                        marginTop: "20px"
                    }}
                    onFinish={onFinish}
                    form={from}
                    layout="vertical"

                >
                    <Form.Item
                        label="留言："
                        name="message"
                    >
                        <TextArea/>
                    </Form.Item>

                    <div
                        className="workName"
                    >作业附件：
                    </div>
                    <div>
                        <Dragger
                            onChange={file => {
                            }}
                        >
                            {/*<Button*/}
                            {/*    icon={<UploadOutlined/>}>上传文件</Button>*/}
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined/>
                            </p>
                            <p className="ant-upload-text">点击选择您要上传的文件</p>
                            <p className="ant-upload-hint">
                                每次允许上传一个文件
                            </p>
                        </Dragger>
                    </div>
                    <Button
                        htmlType="submit"
                        type="primary"
                        style={{
                            marginTop: "10px"
                        }}
                    >
                        确定
                    </Button>
                </Form>
            </BottomFrame>
        </div>
    )
}