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
import {Button, message} from "antd";
import {
    Ketangpai_STUDENTHOMEWORK_DELETEHOMEWORK,
    Ketangpai_STUDENTHOMEWORK_UPDATEHOMEWORK
} from "../../../../../../../../../api/ketangpai/HomeWork";
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
                }:Props
                )=>{

    const navigate = useNavigate();

    const [updataHomework,setUpdataHomework] = useState(false);




    const deleteHomework = ()=>{
        Ketangpai_STUDENTHOMEWORK_DELETEHOMEWORK(homeworkId).then(req=>{
            if (req.data.code == 200){
                message.success("删除成功")
            }else {
                message.error("删除失败")
            }
            window.location.reload()
        })
    }







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
                        localStorage.setItem("homeTitle",title)
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
                    <MyUpdate
                        style={{
                            color:"red"
                        }}
                        onClick={deleteHomework}
                    >
                        删除
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
