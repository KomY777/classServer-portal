import React, {useState} from "react";
import {Button, Card, Dropdown, Form, Input, MenuProps, Modal, Popconfirm, Space} from "antd";
import {BottomCard, Classes, CourseTitle, QOWrapper, Time, TopCard} from "./styled";
import {DownOutlined, EllipsisOutlined, QrcodeOutlined, SmileOutlined, UserOutlined} from "@ant-design/icons";
import classImg from "../../../../src/Static/img.png";
import {useNavigate} from "react-router-dom";


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
                    url
                }: cardData) => {


    const [isModalOpen, setIsModalOpen] = useState(false);


    // 点击×
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };

    // 置顶
    const makeTop = () => {

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
                <Button>
                    置顶
                </Button>
            ),
        },
        {
            key: '2',
            label: (
                <Button>
                    退课
                </Button>
            ),
        },
        {
            key: '3',
            label: (
                <>
                    <Button
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
                <UserOutlined/>负责人:{teacherId}
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
                onOk={handleCancel}
                title="要归档此课程吗"
            >
                <p>您可以在 “课程 - 归档管理”中查看此课程</p>
            </Modal>
        </Card>

    )
}
