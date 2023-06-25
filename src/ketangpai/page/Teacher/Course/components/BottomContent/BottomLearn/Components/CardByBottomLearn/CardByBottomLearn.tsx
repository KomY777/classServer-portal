import React, {useState} from "react";
import {
    CodeImg,
    CodeImgBottom,
    Description,
    DescriptionRight,
    MyselfWork, MyUpdate,
    StateCode,
    Time,
    TitleByCourse,
    Wrapper
} from "./styled";
import imgWork from "../../../../../../../../../Static/img_1.png"
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import {Ketangpai_STUDENTHOMEWORK_UPDATEHOMEWORK} from "../../../../../../../../../api/ketangpai/HomeWork";
import AddHomework from "./components/AddHomework";


interface houmedate{
    id:string,
    courseId:string,
    homeworkState:string,
    title:string,
    remark:string,
    filePath:string,
    startTime:string,
    endTime:string
}
interface Props{
    homeworkId:string,
    title:string,
    endTime:string,
    date:string,
    Correcting:string,
    dataAll:houmedate,

}

export default ({
    homeworkId,
    title,
    endTime,
    date,
    dataAll,
    // Correcting,
                }:Props
                )=>{

    const navigate = useNavigate();

    const [updataHomework,setUpdataHomework] = useState(false);

    return(
        <Wrapper>
            <CodeImg>
                <img src={imgWork} />
                <CodeImgBottom>作业</CodeImgBottom>
            </CodeImg>
            <DescriptionRight>
                <TitleByCourse
                    onClick={()=>{
                        localStorage.setItem("homeworkId",homeworkId)
                        navigate(`/teacher/homeWork/detail`,{replace: true})
                    }}>{title}</TitleByCourse>
                <Description>
                    <Time>提交截止时间:{endTime}</Time>
                    <StateCode>{
                        (date == "0")
                            ?"未发布"
                            :"已发布"}</StateCode>
                    <MyselfWork>个人作业</MyselfWork>
                    <MyUpdate
                        onClick={()=>{
                            setUpdataHomework(true)
                        }}
                    >
                        修改
                    </MyUpdate>
                </Description>
            </DescriptionRight>
            <AddHomework
                openCreateCourse={updataHomework}
                setOpenCreateCourse={setUpdataHomework}
                dataAll={dataAll}
            />
        </Wrapper>
    )
}
