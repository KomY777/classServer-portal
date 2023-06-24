import React from "react";
import axios from "axios";


/**
 * 退出课程
 * @param courseId
 * @constructor
 */
function Ketangpai_STUDENTCOURSE_EXITCOURSE(courseId:any){
    return(
        axios.get(
            "/api/studentCourse/exitCourse",
            {
                params:{
                    id:courseId
                }
            }
        )
    )
}


/**
 * 加入课程
 * @param studentCourse
 * @constructor
 */
function Ketangpai_STUDENTCOURSE_JOINCOURSE(studentCourse:any){
    return(
        axios.post(
            "/api/studentCourse/joinCourse",
            {
                studentCourseDto:studentCourse
            }
        )
    )
}



export {
    Ketangpai_STUDENTCOURSE_EXITCOURSE,
    Ketangpai_STUDENTCOURSE_JOINCOURSE,
}