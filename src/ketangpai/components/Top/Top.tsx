import React from "react";
import IMGTOP from "../../../Static/TeacherTop/img.png";
import {BellOutlined, DownOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import {Left, MiddleWrapper, Right, Wrapper} from "./styled";
import {Avatar, Dropdown, MenuProps, message, Space} from "antd";
import {useNavigate} from "react-router-dom";

export default ()=>{

    const navigate = useNavigate();











    const items: MenuProps['items'] = [
        {
            label: "退出登录",
            key: "/login/user",
        },
    ];

    const onClick: MenuProps['onClick'] = ({ key }) => {
        navigate(key, {replace: true})
    };



















    return(
        <Wrapper>
            <Left
                onClick={()=>{
                    navigate("/login/user", {replace: true})
                }}
                src={IMGTOP}/>
            <MiddleWrapper>
                我的课堂
            </MiddleWrapper>
            <Right>
                <MailOutlined
                    style={{
                        marginLeft:"10px",
                        marginRight:"10px"
                    }}
                />
                <BellOutlined
                    style={{
                        marginLeft:"10px",
                        marginRight:"10px"
                    }}
                />
                <Dropdown
                    menu={{ items, onClick }}
                    placement="bottom"
                    // arrow
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <Avatar style={{
                            }} shape="circle" size={32} icon={<UserOutlined />} />
                        </Space>
                    </a>
                </Dropdown>
            </Right>
        </Wrapper>
    )
}