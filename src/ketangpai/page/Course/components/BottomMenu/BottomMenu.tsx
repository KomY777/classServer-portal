import React, {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {Wrapper} from "./styled";

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
    getItem('课程学习', '1'),
    getItem('课程介绍', '2'),
    getItem('成绩管理', '3'),
];

export default () => {


    return (
        <Wrapper>
            <Menu
                mode="horizontal"
                items={items}
                style={{
                    width:"300px",
                    margin:"auto"
            }}
            />
        </Wrapper>
    );
};