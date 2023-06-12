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
            label: 'Navigation One',
            key: '1',
        },
        {
            label: 'Navigation One',
            key: '2',
        },
        {
            label: 'Navigation One',
            key: '3',
        },
        {
            label: 'Navigation One',
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