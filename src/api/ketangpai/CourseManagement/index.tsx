import React from "react";
import axios from "axios";


/**
 * 新增课程
 * @param course
 * @constructor
 */
function Ketangpai_COURSE_ADDCOURSE(course:any){
    return(
        axios.post(
            "/api/course/addCourse",
            {
                courseName:course.courseName,
                className:course.className,
                courseState:course.courseState,
                teacherId:course.teacherId,
                academicYear:course.academicYear,
                semester:course.semester
            }
        )
    )
}


/**
 * 归档全部
 * @param userId
 * @constructor
 */

function Ketangpai_COURSE_ARCHIVEALL(userId:any){
    return(
        axios.get(
            "/api/course/archiveAll",
            {
                params:{
                    id:userId
                }
            }
        )
    )
}

/**
 * 归档自己
 * @param userId
 * @constructor
 */

function Ketangpai_COURSE_ARCHIVEME(userId:any){
    return(
        axios.get(
            "/api/course/archiveMe",
            {
                params:{
                    id:userId
                }
            }
        )
    )
}


/**
 * 获取课程信息
 * @param userId
 * @constructor
 */
function Ketangpai_COURSE_GETCOURSE(userId:any){
    return(
        axios.get(
            "/api/course/getCourse",
            {
                params:{
                    id:userId
                }
            }

        )
    )
}



/**
 * 获取课程码
 * @constructor
 */
function Ketangpai_COURSE_GETCOURSECODE(course:any){
    return(
        axios.get(
            "/api/course/getCourseCode",
            {
                params:{
                    id:course.id,
                    teacherId:course.teacherId
                }
            }
        )
    )
}


/**
 * 删除课程
 * @param course
 * @constructor
 */
function Ketangpai_COURSE_REMOVECOURSE(id:string,teacherId:string){
    return(
        axios.get(
            "/api/course/removeCourse",
            {
                params:{
                    id:id,
                    teacherId:teacherId
                }
            }
        )
    )
}


/**
 * 修改课程信息
 * @param course
 * @constructor
 */
function Ketangpai_COURSE_UPDATECOURSE(course:any){
    return(
        axios.post(
            "/api/course/updateCourse",
            {
                id:course.id,
                courseName:course.courseName,
                className:course.className,
                courseState:course.courseState,
                teacherId:course.teacherId,
                academicYear:course.academicYear,
                semester:course.semester
            }
        )
    )
}

export {
    /**
     * 新增课程
     * @param course
     * @constructor
     */
    Ketangpai_COURSE_ADDCOURSE,
    /**
     * 获取课程码
     * @constructor
     */
    Ketangpai_COURSE_GETCOURSECODE,
    /**
     * 删除课程码
     * @param course
     * @constructor
     */
    Ketangpai_COURSE_REMOVECOURSE,
    /**
     * 修改课程信息
     * @param course
     * @constructor
     */
    Ketangpai_COURSE_UPDATECOURSE,
    /**
     * 获取课程信息
     * @param userId
     * @constructor
     */
    Ketangpai_COURSE_GETCOURSE,
    /**
     * 归档全部
     * @param userId
     * @constructor
     */
    Ketangpai_COURSE_ARCHIVEALL,
    /**
     * 归档自己
     * @param userId
     * @constructor
     */
    Ketangpai_COURSE_ARCHIVEME,
}