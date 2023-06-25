import React, {useEffect, useState} from "react";
import {Button, Form, Menu} from "antd";
import type {MenuProps} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import AddHomework from "./Components/AddHomework";
import CardByBottomLearn from "./Components/CardByBottomLearn";
import {Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK} from "../../../../../../../api/ketangpai/HomeWork";
import ClassCard from "../../../../../../components/ClassCardStudent/ClassCardStudent";


interface houmedate{
    id:string,
    courseId:string,
    homeworkState:string,
    title:string,
    remark:string,
    filePath:string,
    startTime:string,
    endTime:string
}


const items: MenuProps['items'] = [
    {
        label: '作业',
        key: 'work',
    },
    {
        label: '测试',
        key: 'test',
    },
    {
        label: '课件等资料',
        key: 'information',
    },
    {
        label: '通知与公告',
        key: 'announcement',
    },
];


export default () => {


    const [openCreateCourse, setOpenCreateCourse] = useState<boolean>(false);
    const [homeworkDate, setHomeworkDate] = useState<Array<houmedate>>([])
    useEffect(() => {
        Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK(localStorage.getItem("courseId")).then(req => {
            const {data} = req
            if (data.code == 200) {
                setHomeworkDate(data.data)
            }
        })
    }, [])

    return (

        <div>
            <Menu
                style={{
                    fontSize: "18px"
                }}
                mode="horizontal"
                items={items}
            />
            <p
                style={{
                    display: "inline-block",
                    fontSize: "16px",
                }}
            >&nbsp;&nbsp;&nbsp;&nbsp;共{homeworkDate.length}个作业</p>
            <Button style={{
                display: "inline-block",
                float: "right",
                backgroundColor: "green"
            }}
                    type="primary"
                    onClick={() => {
                        setOpenCreateCourse(true)
                    }}
            >
                <PlusOutlined/>新增作业
            </Button>
            <AddHomework
                openCreateCourse={openCreateCourse}
                setOpenCreateCourse={setOpenCreateCourse}
            />
            <div>
                {homeworkDate.map((item) => (
                    <CardByBottomLearn
                        homeworkId={item.id}
                    title={item.title}
                    endTime={item.endTime}
                    date={item.homeworkState}
                        dataAll={item}
                    Correcting="1"
                    />
                    ))}
            </div>
        </div>
    )

}


