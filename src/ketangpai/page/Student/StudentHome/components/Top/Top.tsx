import React from "react";
import IMGTOP from "../../../../../../Static/TeacherTop/img.png";
import { UserOutlined } from '@ant-design/icons';
import {Left, MiddleWrapper, Right, Wrapper} from "./styled";
import {Avatar} from "antd";

export default ()=>{
    return(
        <Wrapper>
            <Left src={IMGTOP}/>
            <MiddleWrapper>
                我的课堂
            </MiddleWrapper>
            <Right>
                <Avatar style={{
                    position:"fixed",
                    top:"0px",
                    right:"0px"
                }} shape="square" size={64} icon={<UserOutlined />} />
            </Right>
        </Wrapper>
    )
}