import React, {useEffect, useState} from "react";
import {Button, Menu} from "antd";
import type {MenuProps} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import AddHomework from "./Components/AddHomework";
import CardByBottomLearn from "./Components/CardByBottomLearn";
import {Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK} from "../../../../../../../api/ketangpai/HomeWork";


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
    const [homeworkDate,setHomeworkDate] = useState([])
    useEffect(()=>{
        Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK(1).then(req=>{
            console.log(req.data)
        })
    },[])

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
            >&nbsp;&nbsp;&nbsp;&nbsp;共1个活动</p>
            <Button style={{
                display: "inline-block",
                float: "right",
                backgroundColor: "green"
            }}
                    type="primary"
                onClick={()=>{
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
                {/*<CardByBottomLearn*/}
                {/*/>*/}
            </div>
        </div>
    )

}


