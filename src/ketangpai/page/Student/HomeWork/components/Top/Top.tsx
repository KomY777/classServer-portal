import React from "react";
import {Button} from "antd";
import {Wrapper} from "./styled";
import {useNavigate} from "react-router-dom";
import {RightOutlined} from "@ant-design/icons";



export default ()=>{

    const navigate = useNavigate();

    const onClickStudentHome = ()=>{
        navigate("/student/studentHome", {replace: true})
    }
    const onClickCourseLearn = ()=>{
        navigate("/student/course/learn", {replace: true})
    }

    return(
        <Wrapper>
            <Button
                className="classroom"
                onClick={onClickStudentHome}
                style={{
                    border:"0px"
                }}
            >
                我的课堂
            </Button>
            <RightOutlined />
            <Button
                onClick={onClickCourseLearn}
                style={{
                    border:"0px"
                }}
            >
                课堂内容
            </Button>
            <RightOutlined />
            <Button
                style={{
                    border:"0px"
                }}
            >
                作业详情
            </Button>
        </Wrapper>
    )
}