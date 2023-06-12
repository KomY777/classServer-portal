import React from 'react';
import {Card, Collapse} from 'antd';
import {Wrapper} from "./styled";
import ClassCardTeacher from "../../../../../components/ClassCardTeacher/ClassCardTeacher";
import classImg from "../../../../../../Static/img.png";


const {Panel} = Collapse;

export interface cardData {
    time: string;
    title: string;
    classes: string;
    classNumber: string;
    studentNumber:string;
    classImg:string;
}

export default () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    const data: Array<cardData> = [
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            studentNumber:"20",
            classImg:classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            studentNumber:"20",
            classImg:classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            studentNumber:"20",
            classImg:classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            studentNumber:"20",
            classImg:classImg,
        },
    ]

    return (
        <Wrapper>
            <Collapse
                style={{marginTop: "20px"}}
                defaultActiveKey={['1']}
                onChange={onChange}
                accordion
                // bordered={false}
            >
                <Panel header="2022-2023 第二学期" key="1">
                    {data.map((item)=>(
                        <ClassCardTeacher
                            studentNumber={item.studentNumber}
                            time={item.time}
                            title={item.title}
                            classes={item.classes}
                            classNumber={item.classNumber}
                            classImg={item.classImg}
                        />
                    ))}
                </Panel>
            </Collapse>
        </Wrapper>
    );
};