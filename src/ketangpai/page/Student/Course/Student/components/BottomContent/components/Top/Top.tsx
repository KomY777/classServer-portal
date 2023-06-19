import React from "react";
import {Button} from "antd";
import {Wrapper} from "./styled";
import {useNavigate} from "react-router-dom";
import {RightOutlined} from "@ant-design/icons";



export default ()=>{

    const navigate = useNavigate();

    const onClick = ()=>{
        navigate("/student/studentHome", {replace: true})
    }

    return(
        <Wrapper>
            <Button
                onClick={onClick}
                style={{
                    border:"0px"
                }}
            >
                我的课堂
            </Button>
            <RightOutlined />
            <Button
                style={{
                    border:"0px"
                }}
            >
                课程内容
            </Button>
        </Wrapper>
    )
}