import React from "react";
import {Menu} from "antd";
import type {MenuProps} from 'antd';
import CardByBottomLearn from "./Components/CardByBottomLearn";


const items: MenuProps['items'] = [
    {
        label: '作业',
        key: 'work',
    },
    // {
    //     label: '测试',
    //     key: 'test',
    // },
    // {
    //     label: '课件等资料',
    //     key: 'information',
    // },
    // {
    //     label: '通知与公告',
    //     key: 'announcement',
    // },
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
                    fontSize:"16px"
                }}
            >&nbsp;&nbsp;&nbsp;&nbsp;共1个活动</p>
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


