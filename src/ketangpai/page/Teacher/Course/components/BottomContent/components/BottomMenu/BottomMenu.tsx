import React from 'react';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {Wrapper} from "./styled";
import {useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('课程学习', '/teacher/course/Learn'),
    getItem('课程介绍', '/teacher/course/Information'),
    getItem('成绩管理', '/teacher/course/Learn'),
];

export default () => {

    const navigate = useNavigate();

    const onClick = (e:any) => {
        navigate(e.key, {replace: true})
    }

    return (
        <Wrapper>
            <Menu
                mode="horizontal"
                items={items}
                onClick={onClick}
                style={{
                    fontSize:"20px",
                    width:"350px",
                    margin:"auto"
            }}
            />
        </Wrapper>
    );
};