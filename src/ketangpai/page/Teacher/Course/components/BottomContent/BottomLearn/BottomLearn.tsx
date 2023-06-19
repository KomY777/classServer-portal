import React from "react";
import {Button, Menu} from "antd";
import type {MenuProps} from 'antd';
import CardByBottomLearn from "./Components/CardByBottomLearn";
import {TopTitle} from "./styled";
import {PlusOutlined} from "@ant-design/icons";


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
                    display:"inline-block",
                    fontSize:"16px",
                }}
            >&nbsp;&nbsp;&nbsp;&nbsp;共1个活动</p>
            <Button style={{
                display:"inline-block",
                float:"right",
                backgroundColor:"green"
            }} type="primary">
                <PlusOutlined />添加作业
            </Button>
            <div>
                <CardByBottomLearn/>
                <CardByBottomLearn/>
                <CardByBottomLearn/>
                <CardByBottomLearn/>
                <CardByBottomLearn/>
                <CardByBottomLearn/>
                <CardByBottomLearn/>
                <CardByBottomLearn/>
                <CardByBottomLearn/>
            </div>
        </div>
    )

}


