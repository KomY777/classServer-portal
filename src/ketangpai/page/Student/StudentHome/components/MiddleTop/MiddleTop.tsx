import React, {useState} from 'react';
import {Button, Card, Collapse, Form, Input, message, Modal} from 'antd';
import {HeaderBottomLeft, HeaderBottomRight, HeaderBottomWrapper, Wrapper} from "./styled";
import classImg from "../../../../../../Static/img.png";
import ClassCard from "../../../../../components/ClassCardStudent/ClassCardStudent";


export interface cardData {
    time: string;
    title: string;
    classes: string;
    classNumber: string;
    teacherName: string;
    classImg: string;
}


const {Panel} = Collapse;


const HeaderBottom = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);


    // 点击×
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };

    // 表单验证成功
    const onFinish = (values:any) => {
        console.log('Success:',values);
        message.success("加入课程成功")
        setIsModalOpen(false)
    };

    return (
        <HeaderBottomWrapper>
            <HeaderBottomLeft>置顶课程</HeaderBottomLeft>
            <HeaderBottomRight>
                <Button
                    type="primary"
                    onClick={showModal}
                >
                    + 加入课程
                </Button>
            </HeaderBottomRight>
            <Modal
                onCancel={handleCancel}
                title="加入课程"
                open={isModalOpen}
                footer={null}
                destroyOnClose={true}
                cancelText="a"
                centered={true}
            >
                <Form
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="courseCode"
                        label="加入课程"
                        validateFirst={true}

                        rules={[
                            {required:true,message:"必填项"}
                        ]}
                    >
                        <Input placeholder="加课码" />
                    </Form.Item>
                    <Form.Item style={{
                        marginLeft:"130px"
                    }}>
                        <Button
                            htmlType="submit"
                            onClick={handleCancel}
                        >
                            取消
                        </Button>
                        <Button
                            style={{marginLeft:"50px"}}
                            htmlType="submit"
                            type="primary"
                        >
                            确定
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

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
            teacherName: "张金荣",
            classImg: classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            teacherName: "张金荣",
            classImg: classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            teacherName: "张金荣",
            classImg: classImg,
        },
        {
            time: "2022-2023 第二学期",
            title: "python程序设计与数据",
            classes: "121230201,02,03,04",
            classNumber: "加课码:X2ZE3S",
            teacherName: "张金荣",
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
                        <ClassCard
                            teacherName={item.teacherName}
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