import React, {useState} from "react";
import {Button, Card, Dropdown, Form, Input, MenuProps, Modal, Popconfirm, Space} from "antd";
import {BottomCard, Classes, CourseTitle, QOWrapper, Time, TopCard} from "./styled";
import {DownOutlined, EllipsisOutlined, QrcodeOutlined, SmileOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";


export interface cardData {
    time: string;
    title: string;
    classes: string;
    classNumber: string;
    teacherName: string;
    classImg: string;
    url:string,
}


export default ({
                    time,
                    title,
                    classes,
                    classNumber,
                    teacherName,
                    classImg,
                    url,
                }: cardData) => {


    const [isModalOpen, setIsModalOpen] = useState(false);


    // 点击×
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };


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
                    {time}
                </Time>
                <CourseTitle>
                    {title}
                </CourseTitle>
                <Classes>
                    {classes}
                </Classes>
                <QOWrapper>
                    <QrcodeOutlined/>&nbsp;&nbsp;&nbsp;&nbsp;{classNumber}
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
                onOk={handleCancel}
                title="要归档此课程吗"
            >
                <p>您可以在 “课程 - 归档管理”中查看此课程</p>
            </Modal>
        </Card>

    )
}
