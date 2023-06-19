import React from 'react';
import {Card, Collapse} from 'antd';
import {Classes, CourseTitle, QOWrapper, Time, TopCard, Wrapper} from "./styled";
import {QrcodeOutlined} from "@ant-design/icons";
import ClassCard from "../../../../../components/ClassCardStudent/ClassCardStudent";
import classImg from "../../../../../../Static/img.png";


const {Panel} = Collapse;

export interface cardData {
    time: string;
    title: string;
    classes: string;
    classNumber: string;
    teacherName:string;
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
            teacherName:"张金荣",
            classImg:classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            teacherName:"张金荣",
            classImg:classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            teacherName:"张金荣",
            classImg:classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            teacherName:"张金荣",
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
                        <ClassCard
                            teacherName={item.teacherName}
                            time={item.time}
                            title={item.title}
                            classes={item.classes}
                            classNumber={item.classNumber}
                            classImg={item.classImg}
                            url={"/student/course/learn"}
                        />
                    ))}
                </Panel>
            </Collapse>
        </Wrapper>
    );
};