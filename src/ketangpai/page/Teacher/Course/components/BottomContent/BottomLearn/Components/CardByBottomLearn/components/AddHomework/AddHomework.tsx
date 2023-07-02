import React, {useEffect, useState} from "react";
import {Upload, Button, DatePicker, Form, Input, Radio, message, Modal, Select, Switch, UploadProps} from "antd";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";
import {InboxOutlined, UploadOutlined} from "@ant-design/icons";
import moment from 'moment';
import 'moment/locale/zh-cn';
import LocaleProvider from "antd/es/locale";
import zh_CN from 'antd/lib/locale/zh_CN'
import axios from "axios";
import {
    Ketangpai_STUDENTHOMEWORK_CREATHOMEWORK,
    Ketangpai_STUDENTHOMEWORK_UPDATEHOMEWORK
} from "../../../../../../../../../../../api/ketangpai/HomeWork";
import dayjs from "dayjs";
import {UploadFile} from "antd/es/upload/interface";


moment.locale('zh-cn');


const {RangePicker} = DatePicker;

interface houmedate {
    id: string,
    courseId: string,
    homeworkState: string,
    title: string,
    remark: string,
    filePath: string,
    startTime: string,
    endTime: string
}

interface Props {
    openCreateCourse: boolean,
    setOpenCreateCourse: any;
    dataAll: houmedate,
}


export default (
    {
        openCreateCourse,
        setOpenCreateCourse,
        dataAll,
    }: Props
) => {

    const [from] = Form.useForm();
    const [addTime, setAddTime] = useState("none")
    const [homeworkState, setHomeworkState] = useState(dataAll.homeworkState)
    const [switchState, setSwitchState] = useState(false)
    const [dayJsTime,setDayJsTime] = useState<any>(["开始日期","结束日期"])
    const [fileListSelf, setFileListSelf] = useState<UploadFile[]>([
        {
            uid:dataAll.id,
            name:dataAll.title,
            status:"done",
            url:dataAll.filePath
        }
    ])
    const [fileUrl, setFileUrl] = useState<any>("")
    const [fileList, setFileList] = useState<any>(null);
    const [time, setTime] = useState({
        startTime: "",
        endTime: ""
    })

    const changeTime = () => {
        console.log("none")
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

    const onChangeTime = (e:any) => {
        let timeOne = ""
        let timeTwo = ""
        // @ts-ignore
        timeOne = `${e[0].$y}-${e[0].$M + 1}-${e[0].$D} ${e[0].$H}:${e[0].$m}:${e[0].$s}`;
        // @ts-ignore
        timeTwo = `${e[1].$y}-${e[1].$M + 1}-${e[1].$D} ${e[1].$H}:${e[1].$m}:${e[1].$s}`;
        setTime({
            startTime: timeOne,
            endTime: timeTwo
        })
    }

    const onFinish = (values: any) => {
        if (fileList) {
            axios.post(
                "/api/studentHomework/upload",
                {
                    file: fileList
                },
                {
                    headers: {'Content-Type': 'multipart/form-data'},
                }
            ).then(req => {
                setFileUrl(req.data.data[0])
                const Course = {
                    id:dataAll.id,
                    courseId: localStorage.getItem("courseId"),
                    homeworkState: homeworkState,
                    title: values.title,
                    remark: values.remark,
                    startTime: time.startTime,
                    filePath:req.data.data[0],
                    endTime: time.endTime
                }
                Ketangpai_STUDENTHOMEWORK_UPDATEHOMEWORK(Course).then(req => {
                    const {data} = req
                    if (data.code == 200) {
                        message.success("修改成功")
                    } else {
                        message.error("修改失败")
                    }
                    window.location.reload()
                })
                setOpenCreateCourse(false)
            })
        }else {
            const Course = {
                id:dataAll.id,
                courseId: localStorage.getItem("courseId"),
                homeworkState: homeworkState,
                title: values.title,
                remark: values.remark,
                filePath: dataAll.filePath,
                startTime: time.startTime,
                endTime: time.endTime
            }
            Ketangpai_STUDENTHOMEWORK_UPDATEHOMEWORK(Course).then(req => {
                const {data} = req
                if (data.code == 200) {
                    message.success("修改成功")
                } else {
                    message.error("修改失败")
                }
            })
            setOpenCreateCourse(false)
            window.location.reload()
        }
    };



    useEffect(() => {
        console.log(dataAll)
        from.setFieldValue("title", dataAll.title)
        from.setFieldValue("remark", dataAll.remark)
        setDayJsTime([`${dayjs(dataAll.startTime)}`,`${dayjs(dataAll.endTime)}`])
        if (dataAll.homeworkState == "1") {
            setSwitchState(true)
            setHomeworkState("1")
            setAddTime("inline-flex")
        } else {
            setSwitchState(false)
            setHomeworkState("0")
            setAddTime("none")
        }
    }, [])
    const onChangeFile = (info: any) => {
    }

    const handleUpload = () => {
        if (fileList.length) {
            axios.post(
                "/api/studentHomework/upload",
                {
                    file: fileList
                },
                {
                    headers: {'Content-Type': 'multipart/form-data'},
                }
            ).then(req => {
                console.log(req)
                setFileUrl(req)
            })
        }
    };

    const props: UploadProps = {
        onRemove: (file) => {
            // const index = fileList.indexOf(file);
            // const newFileList = fileList.slice();
            // newFileList.splice(index, 1);
            setFileList(null);
        },
        beforeUpload: (file) => {
            setFileList(file);
            return false;
        },
    };


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
            <Form
                form={from}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    name="title"
                    label="作业标题"
                    validateFirst={true}
                    rules={[
                        {required: true, message: "必填项"}
                    ]}
                >
                    <Input showCount maxLength={50} placeholder=""/>
                </Form.Item>
                <Form.Item
                    name="remark"
                    label="备注"
                    validateFirst={true}
                >
                    <TextArea showCount maxLength={200} placeholder=""/>
                </Form.Item>
                <div>
                    <>
                        <Upload
                            fileList={fileListSelf}
                            {...props}
                        >
                            <Button icon={<UploadOutlined/>}>选择文件</Button>
                        </Upload>
                    </>
                </div>
                <div>
                    <Switch
                        style={{
                            margin: "10px 0px"
                        }}
                        onClick={changeTime}
                        checkedChildren="发布"
                        unCheckedChildren="未发布"
                        defaultChecked={switchState}
                    />
                    <LocaleProvider locale={zh_CN}>
                        <RangePicker
                            style={{
                                width: "100%",
                                display: `${addTime}`
                            }}
                            placeholder={dayJsTime}
                            showTime={{format: 'HH:mm'}}
                            format="YYYY-MM-DD HH:mm:ss"
                            changeOnBlur={true}
                            onChange={(e)=>{onChangeTime(e)}}
                        />
                    </LocaleProvider>
                </div>
                <Form.Item style={{
                    marginLeft: "130px"
                }}>
                    <Button
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