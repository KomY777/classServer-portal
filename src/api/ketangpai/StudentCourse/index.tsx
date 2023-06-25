import React from "react";
import axios from "axios";


/**
 * 课程归档
 * @param id
 * @param state
 * @constructor
 */

function Ketangpai_STUDENTCOURSE_ARCHIVE(id:any,state:any){
    return(
        axios.get(
            "/api/studentCourse/archive",
            {
                params:{
                    id:id,
                    state:state,
                }
            }
        )
    )
}






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
 * 获取课程信息
 * @param id
 * @constructor
 */

function Ketangpai_STUDENTCOURSE_GETCOURSE(id:any){
    return(
        axios.get(
            "/api/studentCourse/getCourse",
            {
                params:{
                    id:id
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
function Ketangpai_STUDENTCOURSE_JOINCOURSE(studentCourse:any,courseCode:any){
    return(
        axios.post(
            "/api/studentCourse/joinCourse",
            {
                studentId:studentCourse,
                coruseCode:courseCode,
            }
        )
    )
}




export {
    Ketangpai_STUDENTCOURSE_ARCHIVE,
    Ketangpai_STUDENTCOURSE_EXITCOURSE,
    Ketangpai_STUDENTCOURSE_GETCOURSE,
    Ketangpai_STUDENTCOURSE_JOINCOURSE,
}