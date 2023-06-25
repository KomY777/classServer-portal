import React, {useEffect, useState} from "react";
import {Button, Card, Divider} from "antd";
import {Delete, DivImg, gridStyle, Operate, Recover} from "./styled";
import TopIMGPNG from "../../../../../../../../../../Static/TopImg/27.png";
import {
    Ketangpai_COURSE_ARCHIVEME,
    Ketangpai_COURSE_GETCOURSE, Ketangpai_COURSE_REMOVECOURSE
} from "../../../../../../../../../../api/ketangpai/CourseManagement";
import {cardData} from "../../../../../MiddleTop/MiddleTop";


interface homework{
    id:string,
    classNumber:string,
    title:string,
    courseCode:string,
}

export default (
    {
        id,
        classNumber,
        title,
        courseCode,
    }:homework
)=>{

    const setRecover=()=>{
        Ketangpai_COURSE_ARCHIVEME(id,0).then(req => {
            window.location.reload()
        })
    }

    const setDelete=()=>{
        Ketangpai_COURSE_REMOVECOURSE(id,`${localStorage.getItem("userId")}`).then(req => {
            window.location.reload()
        })
    }

    return(
        <Card.Grid
        style={gridStyle}
        >
            <div
                style={{
                    width:"50%",
                    float:"left"
                }}
            >
                <DivImg
                    style={{
                        backgroundImage:`url(${TopIMGPNG})`,
                    }}
                >
                    &nbsp;加课码&nbsp;&nbsp;{courseCode}
                </DivImg>
                <div style={{
                    lineHeight:"20px",
                    display:"inline-block"
                }}>
                    <div>{classNumber}</div>
                    <div
                        style={{
                            fontSize:"20px",
                            margin:"5px 0px"
                        }}
                    >{title}</div>
                </div>
                <Divider/>
            </div>
            <Operate>
                <Recover
                    onClick={setRecover}
                >
                    恢复
                </Recover>
                <Delete
                    onClick={setDelete}
                >
                    删除
                </Delete>
            </Operate>
        </Card.Grid>
    )
}