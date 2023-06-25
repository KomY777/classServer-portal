import React, {useEffect, useState} from "react";
import {Col, Menu, message, Modal, Row} from "antd";
import type {MenuProps} from 'antd';
import {LeftDiv, RightDiv, Wrapper} from "./styled";
import CourseCard from "./components/CourseCard";
import {Ketangpai_COURSE_GETCOURSE} from "../../../../../../../../api/ketangpai/CourseManagement";
import {cardData} from "../../../MiddleTop/MiddleTop";


interface Props {
    openArchive: boolean
    setOpenArchive: any;
}

export default (
    {
        openArchive,
        setOpenArchive,
    }: Props
) => {

    const [pigeonhole, setPigeonhole] = useState<Array<cardData>>([]);


    //根据学生id获取课程信息
    useEffect(() => {
        Ketangpai_COURSE_GETCOURSE(localStorage.getItem("userId")).then(req => {
            const {data} = req;
            if (data.code == 200){
                const temp:Array<cardData>=[]
                data.data.map((item:cardData)=>{
                    // @ts-ignore
                    if (item.courseState === 3||item.courseCode==2){
                        temp.push(item)
                    }
                })
                setPigeonhole([...temp])
            }
        })
    },[])

    const items: MenuProps['items'] = [
        {
            label: '课程',
            key: '1',
        },
        {
            label: '2022-2023 第一学期',
            key: '2',
        },
        {
            label: '2021-2022 第二学期',
            key: '3',
        },
        {
            label: '2021-2022 第一学期',
            key: '4',
        },
    ];


    const handleCancel = () => {
        setOpenArchive(false);
    };
    return (
        <Modal
            onCancel={handleCancel}
            title="归档课程"
            width={1000}
            open={openArchive}
            footer={null}
            destroyOnClose={true}
            cancelText="a"
            centered={true}
        >
            <Wrapper>
                <LeftDiv>
                    <Menu
                        // items={items}
                    />
                </LeftDiv>
                <RightDiv>
                    {pigeonhole.map((item)=>(
                        <CourseCard
                            id={item.id}
                            classNumber={item.className}
                            title={item.courseName}
                            courseCode={item.courseCode}
                        />
                    ))}
                </RightDiv>
            </Wrapper>
        </Modal>
    )
}