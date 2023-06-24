import React from "react";
import IMGTOP from "../../../Static/TeacherTop/img.png";
import {BellOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import {Left, MiddleWrapper, Right, Wrapper} from "./styled";
import {Avatar} from "antd";
import {useNavigate} from "react-router-dom";

export default ()=>{

    const navigate = useNavigate();

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
                <Avatar style={{
                }} shape="circle" size={32} icon={<UserOutlined />} />
            </Right>
        </Wrapper>
    )
}