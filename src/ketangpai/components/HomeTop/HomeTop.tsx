import React, {useState} from 'react';
import type {MenuProps} from 'antd';
import HomeImg from '../../../Static/Home/img.png';
import {Button, Image, Menu} from 'antd';
import {Left, Right, Wrapper} from "./styled";

const items: MenuProps['items'] = [
    {
        label: '首页',
        key: 'home',
    },
    {
        label: '产品功能',
        key: 'product',
    },
    {
        label: '机构版',
        key: 'institution',
    },
    {
        label: '渠道合作',
        key: 'cooperate',
    },
    {
        label: '会员权益',
        key: 'member',
    },
    {
        label: '帮助中心',
        key: 'help',
    },
];

const App: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Wrapper>
            <Left>
                <Image src={HomeImg}/>
            </Left>
            <Menu
                inlineCollapsed={false}
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
            <Right>
                <Button
                    style={{
                        float:"right",
                        height:'50px',
                        width:"80px",
                        fontSize: "20px",
                    }}
                    type="primary"
                >
                    登录
                </Button>
            </Right>
        </Wrapper>
    )
};

export default App;