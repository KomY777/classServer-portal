import React, {useEffect, useState} from "react";
import {ButtonInformation, Description, Wrapper} from "./styled";
import {Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK} from "../../../../../../../api/ketangpai/HomeWork";
import {Ketangpai_COURSE_GETONECOURSE} from "../../../../../../../api/ketangpai/CourseManagement";



interface courseData{
    title:string,
    classNumber:string,
    courseCode:string,
    academicYear:string,
    semester:string,

}




export default () => {

    const [courseDataTop,setCourseDataTop] = useState<courseData>({
        title:"",
        classNumber:"",
        courseCode:"",
        academicYear:"",
        semester:""
    })


    useEffect(()=>{
        Ketangpai_COURSE_GETONECOURSE(localStorage.getItem("courseId")).then(req=>{
            const {data} = req
            if (data.code==200){
                setCourseDataTop({
                    title:data.data.courseName,
                    classNumber:data.data.className,
                    courseCode:data.data.courseCode,
                    academicYear:data.data.academicYear,
                    semester:data.data.semester
                })
            }
        })
    },[])




    return (
        <Wrapper>
            <ButtonInformation>
                基本信息
            </ButtonInformation>
            <Description>
                <div
                    style={{
                        marginBottom: "20px",
                        fontSize: "18px"
                    }}
                >基本信息
                </div>
                <div
                    style={{
                        border: "1px solid #dadce0",
                        borderLeft:"5px #4285f4 solid",
                        borderRadius: "5px",
                    }}

                >
                    <div
                        className="line"
                    >
                        <div
                            className="left"
                        >
                            课程名称
                        </div>
                        {courseDataTop.title}
                    </div>
                    <div
                        className="line"
                    >
                        <div
                            className="left"
                        >
                            教学班级
                        </div>
                        {courseDataTop.classNumber}
                    </div>
                    <div
                        className="line"
                    >
                        <div
                            className="left"
                        >
                            学年-学期
                        </div>
                        {courseDataTop.academicYear}-{courseDataTop.semester}
                    </div>
                </div>
            </Description>
        </Wrapper>
    )
}