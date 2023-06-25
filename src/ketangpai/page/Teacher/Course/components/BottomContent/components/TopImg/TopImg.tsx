import React, {useEffect, useState} from "react";
import { BottomContent, ClassNumbers, CourseClass, CourseTitle, QOTitle, TopDivImg} from "./styled";
import TopIMGPNG from "../../../../../../../../Static/TopImg/27.png"
import {QrcodeOutlined} from "@ant-design/icons";
import {Ketangpai_COURSE_GETONECOURSE} from "../../../../../../../../api/ketangpai/CourseManagement";

interface courseData{
    title:string,
    classNumber:string,
    courseCode:string,
}
export default ()=>{


    const [courseDataTop,setCourseDataTop] = useState<courseData>({
        title:"",
        classNumber:"",
        courseCode:"",
    })


    useEffect(()=>{
        Ketangpai_COURSE_GETONECOURSE(localStorage.getItem("courseId")).then(req=>{
            const {data} = req
            if (data.code==200){
                setCourseDataTop({
                    title:data.data.courseName,
                    classNumber:data.data.className,
                    courseCode:data.data.courseCode
                })
            }
        })
    },[])

    return(
        <TopDivImg
            style={{
                backgroundImage:`url(${TopIMGPNG})`
            }}>
            <CourseTitle>{courseDataTop.title}</CourseTitle>
            <CourseClass>{courseDataTop.classNumber}</CourseClass>
            <BottomContent>
                <QOTitle><QrcodeOutlined/> 加课码 {courseDataTop.courseCode}</QOTitle>
            </BottomContent>
        </TopDivImg>
    )


}