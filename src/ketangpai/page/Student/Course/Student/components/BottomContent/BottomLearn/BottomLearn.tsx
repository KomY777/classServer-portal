import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import type {MenuProps} from 'antd';
import CardByBottomLearn from "./Components/CardByBottomLearn";
import {Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK} from "../../../../../../../../api/ketangpai/HomeWork";



interface homedate{
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
];


export default () => {
    const [homeworkDate, setHomeworkDate] = useState<Array<homedate>>([])

    useEffect(() => {
        Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK(localStorage.getItem("courseId")).then(req => {
            const {data} = req
            const temp:Array<homedate>=[]
            if (data.code == 200) {
                data.data.map((item:homedate)=>(
                    item.homeworkState=="1"?temp.push(item):null
                ))
            }
            setHomeworkDate(temp)
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
                    fontSize:"16px"
                }}
            >&nbsp;&nbsp;&nbsp;&nbsp;共{homeworkDate.length}个作业</p>
            <div>
                {homeworkDate.map((item) => (
                    <CardByBottomLearn
                        homeworkId={item.id}
                        title={item.title}
                        endTime={item.endTime}
                        date="1"
                        Correcting="1"
                    />
                ))}
            </div>
        </div>
    )

}


