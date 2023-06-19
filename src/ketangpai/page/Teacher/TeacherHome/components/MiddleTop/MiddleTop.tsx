import React, {useState} from 'react';
import {Button, Card, Collapse, Form, Input, message, Modal, Select} from 'antd';
import {HeaderBottomLeft, HeaderBottomRight, HeaderBottomWrapper, Wrapper} from "./styled";
import classImg from "../../../../../../Static/img.png";
import ClassCardTeacher from "../../../../../components/ClassCardTeacher/ClassCardTeacher";
import Title from "antd/lib/skeleton/Title";
import CreateCourse from "./components/CreateCourse";
import ArchiveManagement from "./components/ArchiveManagement";


export interface cardData {
    time: string;
    title: string;
    classes: string;
    classNumber: string;
    studentNumber: string;
    classImg: string;
}


const {Panel} = Collapse;


const HeaderBottom = () => {


    const selectSchoolYear = [
        "2020-2021",
        "2021-2022",
        "2022-2023",
        "2023-2024",
        "2024-2025"
    ]

    const semester = [
        "全年",
        "第一学期",
        "第二学期",
    ]

    const [openCreateCourse, setOpenCreateCourse] = useState<boolean>(false);
    const [openArchive, setOpenArchive] = useState<boolean>(false)


    // 点击×
    const showOpenArchive = () => {
        setOpenArchive(true);
    };
    const showOpenCreateCourse = () => {
        setOpenCreateCourse(true);
    };

    // 表单验证成功
    const onFinish = (values: any) => {
        console.log('Success:', values);
        message.success("创建课程成功")
        setOpenCreateCourse(false)
    };

    return (
        <HeaderBottomWrapper>
            <HeaderBottomLeft>置顶课程</HeaderBottomLeft>
            <HeaderBottomRight>
                <Button
                    type="primary"
                    onClick={showOpenCreateCourse}
                >
                    + 创建课程
                </Button>
                <Button
                    onClick={showOpenArchive}
                >
                    归档管理
                </Button>
                <CreateCourse
                    openCreateCourse={openCreateCourse}
                    setOpenCreateCourse={setOpenCreateCourse}
                />
                <ArchiveManagement
                    openArchive={openArchive}
                    setOpenArchive={setOpenArchive}
                />
            </HeaderBottomRight>

        </HeaderBottomWrapper>
    )
}


export default () => {


    const data: Array<cardData> = [
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            studentNumber: "张金荣",
            classImg: classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            studentNumber: "张金荣",
            classImg: classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            studentNumber: "张金荣",
            classImg: classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            studentNumber: "张金荣",
            classImg: classImg,
        },
    ]


    const onChange = (key: string | string[]) => {
        console.log(key);
    };


    return (
        <Wrapper>
            <Collapse
                defaultActiveKey={['1']}
                collapsible={"disabled"}
                onChange={onChange}
            >
                <Panel
                    header={<HeaderBottom/>}
                    key="1"
                    showArrow={false}
                >
                    {data.map((item) => (
                        <ClassCardTeacher
                            studentNumber={item.studentNumber}
                            time={item.time}
                            title={item.title}
                            classes={item.classes}
                            classNumber={item.classNumber}
                            classImg={item.classImg}
                            url={"/teacher/course/learn"}
                        />
                    ))}
                </Panel>
            </Collapse>
        </Wrapper>
    );
};