import React from "react";
import { BottomContent, ClassNumbers, CourseClass, CourseTitle, QOTitle, TopDivImg} from "./styled";
import TopIMGPNG from "../../../../../../../../../Static/TopImg/27.png"
import {QrcodeOutlined} from "@ant-design/icons";


export default ()=>{

    return(
        <TopDivImg
            style={{
                backgroundImage:`url(${TopIMGPNG})`
            }}>
            <CourseTitle>python程序设计与数据分析</CourseTitle>
            <CourseClass>121230201,02,03,04</CourseClass>
            <BottomContent>
                <QOTitle><QrcodeOutlined/> 加课码 X2ZE3S</QOTitle>
                <ClassNumbers>已有167人加入</ClassNumbers>
            </BottomContent>
        </TopDivImg>
    )


}


