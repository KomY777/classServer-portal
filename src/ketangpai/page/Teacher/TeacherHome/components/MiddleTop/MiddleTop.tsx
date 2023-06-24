import React, {useEffect, useState} from 'react';
import {Button, Card, Collapse, Form, Input, message, Modal, Select} from 'antd';
import {HeaderBottomLeft, HeaderBottomRight, HeaderBottomWrapper, Wrapper} from "./styled";
import classImg from "../../../../../../Static/img.png";
import ClassCardTeacher from "../../../../../components/ClassCardTeacher/ClassCardTeacher";
import Title from "antd/lib/skeleton/Title";
import CreateCourse from "./components/CreateCourse";
import ArchiveManagement from "./components/ArchiveManagement";
import {Ketangpai_COURSE_GETCOURSE} from "../../../../../../api/ketangpai/CourseManagement";


export interface cardData {
    id: string,
    courseName: string,
    className: string,
    courseState: string,
    teacherId: string,
    academicYear: string,
    semester: string,
    courseCode: string,
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


    const [topDatas, setTopDatas] = useState<Array<cardData>>([]);


    //根据学生id获取课程信息
    useEffect(() => {
        // console.log(localStorage.getItem("userId"))
        Ketangpai_COURSE_GETCOURSE(localStorage.getItem("userId")).then(req => {
            const {data} = req;
            console.log(data)
            if (data.code == 200){
                const temp:Array<cardData>=[]
                data.data.map((item:cardData)=>{
                    // @ts-ignore
                    if (item.courseState === 1){
                        temp.push(item)
                    }
                })
                setTopDatas([...temp])
            }
        })
    },[])


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
                    {topDatas.map((item) => (
                        <ClassCardTeacher
                            id={item.id}
                            courseName={item.courseName}
                            className={item.className}
                            courseState={item.courseState}
                            teacherId={item.teacherId}
                            academicYear={item.academicYear}
                            semester={item.semester}
                            courseCode={item.courseCode}
                            url={"/teacher/course/learn"}
                            isTop={false}
                        />
                    ))}
                </Panel>
            </Collapse>
        </Wrapper>
    );
};