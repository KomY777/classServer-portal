import React from "react";
import {
    CodeImg,
    CodeImgBottom,
    Description,
    DescriptionRight,
    MyselfWork,
    StateCode,
    Time,
    TitleByCourse,
    Wrapper
} from "./styled";
import imgWork from "../../../../../../../../../Static/img_1.png"
import {useNavigate} from "react-router-dom";


interface Props{
    homeworkId:string,
    title:string,
    endTime:string,
    date:string,
    Correcting:string,
}


export default ({
    homeworkId,
    title,
    endTime,
    date,
    Correcting,
                }:Props
                )=>{

    const navigate = useNavigate();
    return(
        <Wrapper>
            <CodeImg>
                <img src={imgWork} />
                <CodeImgBottom>作业</CodeImgBottom>
            </CodeImg>
            <DescriptionRight>
                <TitleByCourse
                    onClick={()=>{
                        navigate(`/teacher/homeWork/detail`,{replace: true})
                    }}>{title}</TitleByCourse>
                <Description>
                    <Time>提交截止时间：{endTime}</Time>
                    <StateCode>{date} </StateCode>
                    <MyselfWork>个人作业</MyselfWork>
                </Description>
                <div
                    style={{
                        color:'#4285f4'
                    }}
                >{Correcting}</div>
            </DescriptionRight>
        </Wrapper>
    )
}