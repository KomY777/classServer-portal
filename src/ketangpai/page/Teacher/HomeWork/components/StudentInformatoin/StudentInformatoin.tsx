import React, {useEffect, useState} from "react";
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
// ../../../../../../../../../Static/img_1.png
import imgWork from "../../../../../../Static/img_1.png"
import {useNavigate} from "react-router-dom";
import {Ketangpain_STUDNENTHOMEWORK_GETALLHOMEWORKINFO} from "../../../../../../api/ketangpai/HomeWork";


interface Props{
    commitState:string,
    filePath:string,
    grade:string,
    homeworkId:string,
    id:string,
    remark:string,
    studentId:string,
    updateTime:string,
}


export default (
)=>{

    const navigate = useNavigate();
    const [studentInfo,setStudentInfo] = useState<Array<Props>>([]);

    useEffect(()=>{
        Ketangpain_STUDNENTHOMEWORK_GETALLHOMEWORKINFO(`${localStorage.getItem("homeworkId")}`).then(req=>{
            const {data} = req
            if (data.code==200){
                setStudentInfo(data.data)
            }
        })
    })


    return(
        <div>
            {
                studentInfo.map((item)=>(
                    <Wrapper>
                        <CodeImg>
                            <img src={imgWork} />
                            <CodeImgBottom>作业</CodeImgBottom>
                        </CodeImg>
                        <DescriptionRight>
                            <TitleByCourse
                                // onClick={()=>{
                                //     localStorage.setItem("homeworkId",homeworkId)
                                //     navigate(`/teacher/homeWork/detail`,{replace: true})
                                // }}
                            ></TitleByCourse>
                            <Description>
                                <Time>提交时间:{item.updateTime}</Time>
                                <StateCode>提交学生：{item.studentId}</StateCode>
                                <MyselfWork
                                onClick={()=>{
                                    localStorage.setItem("homeworkId",item.homeworkId)
                                    navigate(`/teacher/homeWork/submitJob`,{replace: true})
                                }}
                                >批改作业</MyselfWork>
                            </Description>
                        </DescriptionRight>
                    </Wrapper>
                ))

            }
        </div>
    )
}