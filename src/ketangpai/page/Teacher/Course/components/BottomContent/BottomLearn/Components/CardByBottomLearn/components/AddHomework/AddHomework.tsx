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
import {Ketangpai_STUDENTHOMEWORK_UPDATEHOMEWORK} from "../../../../../../../../../../../api/ketangpai/HomeWork";


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
    const [homeworkState, setHomeworkState] = useState("0")
    const [time, setTime] = useState({

        startTime: "",
        endTime: ""
    })

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
            // courseId: localStorage.getItem("courseId"),
            // homeworkState: homeworkState,
            // title: values.title,
            // remark: values.remark,
            // startTime: time.startTime,
            // endTime: time.endTime


            id: dataAll.id,
            courseId: dataAll.courseId,
            homeworkState: homeworkState,
            title: values.title,
            remark: values.remark,
            filePath: "",
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
            window.location.reload()
        })
        setOpenCreateCourse(false)
    };


    useEffect(() => {
        from.setFieldValue("title", dataAll.title)
        from.setFieldValue("remark", dataAll.remark)
        if (dataAll.courseId == "1") {

        }

    }, [])
    const onChangeFile = (info: any) => {
    }

    const [fileUrl, setFileUrl] = useState<any>("")
    const [fileList, setFileList] = useState<any>({});
    const handleUpload = () => {
        // console.log(fileList.length)
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
                // console.log(req)
                setFileUrl(req)
            })
        }
    };

    const props: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
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
            {/*<div>基本信息</div>*/}
            <Form
                form={from}
                // name="validateOnly"
                layout="vertical"
                // autoComplete="off"
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
                        <Upload {...props}>
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
                        defaultChecked={false}
                    />
                    <LocaleProvider locale={zh_CN}>
                        <RangePicker
                            style={{
                                width: "100%",
                                display: `${addTime}`
                            }}
                            showTime={{format: 'HH:mm'}}
                            format="YYYY-MM-DD HH:mm:ss"
                            onChange={(e) => {
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
                            }
                        />
                    </LocaleProvider>
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
                        onClick={handleUpload}
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