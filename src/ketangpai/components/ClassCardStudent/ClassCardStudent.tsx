import React, {useState} from "react";
import {Button, Card, Dropdown, Form, Input, MenuProps, message, Modal, Popconfirm, Space} from "antd";
import {BottomCard, Classes, CourseTitle, QOWrapper, Time, TopCard} from "./styled";
import {DownOutlined, EllipsisOutlined, QrcodeOutlined, SmileOutlined, UserOutlined} from "@ant-design/icons";
import classImg from "../../../../src/Static/img.png";
import {useNavigate} from "react-router-dom";
import {Ketangpai_COURSE_ARCHIVEME, Ketangpai_COURSE_UPDATECOURSE} from "../../../api/ketangpai/CourseManagement";


export interface cardData {
    id: string,
    courseName: string,
    className: string,
    courseState: string,
    teacherId: string,
    teacherName:string,
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
                    teacherName,
                    url,
                    isTop,
                }: cardData) => {


    const [isModalOpen, setIsModalOpen] = useState(false);


    // 点击×
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onOk=()=>{
        Ketangpai_COURSE_ARCHIVEME(id,3).then(req=>{
            window.location.reload()
        })
        setIsModalOpen(false);
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    // 置顶
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

    // 退课
    const withdrawalCourse = () => {

    }

    //归档
    const pigeonhole = () => {

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
                >
                    退课
                </Button>
            ),
        },
        {
            key: '3',
            label: (
                <>
                    <Button
                        style={{
                            width:"100%"
                        }}
                        onClick={showModal}
                    >
                        归档
                    </Button>
                </>
            ),
        },
    ];


    const navigate = useNavigate();

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
                    {semester}
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
            <BottomCard>
                <UserOutlined/>负责人:{teacherName}
                <Dropdown
                    className="rightBottom"
                    menu={{items}}
                    placement="bottom"
                    autoAdjustOverflow={true}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <EllipsisOutlined/>
                        </Space>
                    </a>
                </Dropdown>
            </BottomCard>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                okText="归档自己"
                cancelText="取消"
                onOk={onOk}
                title="要归档此课程吗"
            >
                <p>您可以在 “课程 - 归档管理”中查看此课程</p>
            </Modal>
        </Card>

    )
}
