import React, {useEffect, useState} from 'react';
import {Button, Empty, Collapse, Form, Input, message, Modal} from 'antd';
import {HeaderBottomLeft, HeaderBottomRight, HeaderBottomWrapper, Wrapper} from "./styled";
import ClassCard from "../../../../../components/ClassCardStudent/ClassCardStudent";
import {
    Ketangpai_STUDENTCOURSE_GETCOURSE,
    Ketangpai_STUDENTCOURSE_JOINCOURSE
} from "../../../../../../api/ketangpai/StudentCourse";


export interface cardData {
    id: string,
    courseName: string,
    className: string,
    courseState: string,
    teacherId: string,
    academicYear: string,
    semester: string,
    teacherName:string,
    courseCode: string,
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
    const onFinish = (values: any) => {
        Ketangpai_STUDENTCOURSE_JOINCOURSE(localStorage.getItem("userId"),values.courseCode).then(req=>{
            const {data} = req
            if (data.code==200){
                message.success("加入课程成功")
                window.location.reload()
            }else {
                message.error("加入失败")
            }
        })
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
                            {required: true, message: "必填项"}
                        ]}
                    >
                        <Input placeholder="加课码"/>
                    </Form.Item>
                    <Form.Item style={{
                        marginLeft: "130px"
                    }}>
                        <Button
                            htmlType="submit"
                            onClick={handleCancel}
                        >
                            取消
                        </Button>
                        <Button
                            style={{marginLeft: "50px"}}
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


    const [topDatas, setTopDatas] = useState<Array<cardData>>([]);


    //根据学生id获取课程信息
    useEffect(() => {
        Ketangpai_STUDENTCOURSE_GETCOURSE(localStorage.getItem("userId")).then(req => {
            const {data} = req;
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
                >
                    {
                        topDatas.length !==0?topDatas.map((item) => (
                            <ClassCard
                                id={item.id}
                                courseName={item.courseName}
                                className={item.className}
                                teacherName={item.teacherName}
                                courseState={item.courseState}
                                teacherId={item.teacherId}
                                academicYear={item.academicYear}
                                semester={item.semester}
                                courseCode={item.courseCode}
                                url={"/student/course/learn"}
                                isTop={false}
                            />
                        )):<Empty description="暂无课程" />
                    }
                </Panel>
            </Collapse>
        </Wrapper>
    );
};