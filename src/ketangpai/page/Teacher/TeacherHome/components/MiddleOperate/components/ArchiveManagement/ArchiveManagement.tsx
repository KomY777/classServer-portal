import React from "react";
import {Col, Menu, message, Modal, Row} from "antd";
import type {MenuProps} from 'antd';
import {LeftDiv, RightDiv, Wrapper} from "./styled";
import CourseCard from "./components/CourseCard";


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


    const items: MenuProps['items'] = [
        {
            label: '2022-2023 第二学期',
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
                        items={items}
                    />
                </LeftDiv>
                <RightDiv>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </RightDiv>
            </Wrapper>
        </Modal>
    )
}