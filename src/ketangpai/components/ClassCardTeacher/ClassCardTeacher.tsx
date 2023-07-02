import React, {useState} from "react";
import {Button, Card, Dropdown, MenuProps, Space} from "antd";
import {BottomCard, Classes, CourseTitle, QOWrapper, RightBottom, Time, TopCard} from "./styled";
import {DownOutlined, EllipsisOutlined, QrcodeOutlined, SmileOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import classImg from "../../../../src/Static/img.png";
import Archive from "./Archive";
import {Ketangpai_COURSE_REMOVECOURSE, Ketangpai_COURSE_UPDATECOURSE} from "../../../api/ketangpai/CourseManagement";
import UpdataCourse from "./UpdataCourse";

export interface cardData {
    id: string,
    courseName: string,
    className: string,
    courseState: string,
    teacherId: string,
    academicYear: string,
    semester: string,
    courseCode: string,
    url: string,
    isTop:boolean,
}


export default ({
                    id,
                    courseName,
                    className,
                    courseState,
                    teacherId,
                    academicYear,
                    semester,
                    courseCode,
                    url,
                    isTop,
                }: cardData) => {

    const navigate = useNavigate();
    const [openArchive, setOpenArchive] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)







    const DeleteCourse=()=>{
        Ketangpai_COURSE_REMOVECOURSE(id,`${localStorage.getItem("userId")}`).then(req=>{
            window.location.reload()
        })
    }
    const makeTop = () =>{
        const Course = {
            id:id,
            courseName:courseName,
            className:className,
            courseState:isTop?1:0,
            teacherId:teacherId,
            academicYear:academicYear,
            semester:semester,
            courseCode:courseCode,

        }
        Ketangpai_COURSE_UPDATECOURSE(Course).then(req=>{
            window.location.reload()
        })
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Button
                    onClick={makeTop}
                >
                    {
                        isTop?"置顶":"取消置顶"
                    }
                </Button>
            ),
        },
        {
            key: '2',
            label: (
                <Button
                    style={{
                        width:"100%"
                    }}
                    onClick={DeleteCourse}
                >
                    删除
                </Button>
            ),
        },
        {
            key: '3',
            label: (
                <Button
                    style={{
                        width:"100%"
                    }}
                onClick={()=>{
                    setOpenUpdate(true)
                }}
                >
                    编辑
                </Button>
            ),
        },
        {
            key: '4',
            label: (
                <Button
                    style={{
                        width:"100%"
                    }}
                    onClick={() => {
                        setOpenArchive(true)}
                    }
                >
                    归档
                </Button>
            ),
        },
    ];

    return (
        <Card
            style={{
                display: "inline-block",
                width: "250px",
                height: "200px",
                marginRight: "14px",
                marginLeft: "14px",
            }}
        >
            <TopCard
                onClick={() => {
                    localStorage.setItem("courseId",id)
                    navigate(`${url}`, {replace: true})
                }}
                style={{
                    backgroundImage: `url(${classImg})`
                }}
            >
                <Time>
                    {academicYear}-{semester}
                </Time>
                <CourseTitle>
                    {courseName}
                </CourseTitle>
                <Classes>
                    {className}
                </Classes>
                <QOWrapper>
                    <QrcodeOutlined/>&nbsp;&nbsp;&nbsp;&nbsp;{courseCode}
                </QOWrapper>
            </TopCard>
            <div
                style={{
                    width: "100%"
                }}
            >
                <RightBottom>
                    <Dropdown className="rightBottom" menu={{items}}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <EllipsisOutlined/>
                            </Space>
                        </a>
                    </Dropdown>
                </RightBottom>
            </div>
            <Archive
                openArchive={openArchive}
                setOpenArchive={setOpenArchive}
                id={id}
            />
            <UpdataCourse
                openUpdate={openUpdate}
                setOpenUpdate={setOpenUpdate}
                courseDefault={
                    {
                        id,
                        courseName,
                        className,
                        courseState,
                        teacherId,
                        academicYear,
                        semester,
                        courseCode,
                    }
                }
            />
        </Card>

    )
}
