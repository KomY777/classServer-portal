import React from "react";
import {Button, Card, Dropdown, MenuProps, Space} from "antd";
import {BottomCard, Classes, CourseTitle, QOWrapper, Time, TopCard} from "./styled";
import {DownOutlined, EllipsisOutlined, QrcodeOutlined, SmileOutlined, UserOutlined} from "@ant-design/icons";



export interface cardData {
    time: string;
    title: string;
    classes: string;
    classNumber: string;
    teacherName:string;
    classImg:string;
}






export default ({
                    time,
                    title,
                    classes,
                    classNumber,
                    teacherName,
                    classImg,
                }: cardData) => {



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
                style={{
                    backgroundImage:`url(${classImg})`
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
                    <Dropdown className="rightBottom" menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <EllipsisOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </QOWrapper>
            </TopCard>
            <BottomCard>
                <UserOutlined/>负责人:{teacherName}
            </BottomCard>
        </Card>

    )
}
