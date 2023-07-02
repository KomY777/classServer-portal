import React from "react";
import axios from "axios";


/**
 *
 * @param homeId
 * @constructor
 */

function Ketangpai_STUDENTHOMEWORK_CORRECTING(homeId: string) {
    return (
        axios.get(
            "/api/studentHomework/Correcting",
            {
                params: {
                    homeworkId: homeId,
                }
            }
        )
    )
}


function Ketangpain_STUDNENTHOMEWORK_GETALLHOMEWORKINFO(homeworkId: string) {
    return(
        axios.get(
            "/api/studentHomework/getAllHomeworkInfo",
            {
                params: {
                    homeworkId: homeworkId
                }
            }
        )
    )
}


/**
 * 发布作业
 * @param homeWorkFile
 * @constructor
 */
function Ketangpai_STUDENTHOMEWORK_CREATHOMEWORK(homeWorkFile: any) {
    return (
        axios.post(
            "/api/studentHomework/creatHomework",
            {
                courseId: homeWorkFile.courseId,
                homeworkState: homeWorkFile.homeworkState,
                title: homeWorkFile.title,
                remark: homeWorkFile.remark,
                filePath: homeWorkFile.filePath,
                startTime: homeWorkFile.startTime,
                endTime: homeWorkFile.endTime
            }
        )
    )
}


/**
 * 删除作业
 * @param homeWorkID
 * @constructor
 */

function Ketangpai_STUDENTHOMEWORK_DELETEHOMEWORK(homeWorkID: string) {
    return (
        axios.get(
            "/api/studentHomework/deleteHomework",
            {
                params: {
                    homeworkId: homeWorkID
                }
            }
        )
    )
}


/**
 * 获取作业信息
 * @param courseId
 * @constructor
 */

function Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK(courseId: any) {
    return (
        axios.get(
            "/api/studentHomework/getAllHomework",
            {
                params: {
                    courseId: courseId
                }
            }
        )
    )
}


/**
 * 修改作业
 * @param homeWork
 * @constructor
 */
function Ketangpai_STUDENTHOMEWORK_UPDATEHOMEWORK(homeWork: any) {
    return (
        axios.post(
            "/api/studentHomework/updateHomework",
            {
                id:homeWork.id,
                courseId:homeWork.courseId,
                homeworkState:homeWork.homeworkState,
                title:homeWork.title,
                remark:homeWork.remark,
                filePath:homeWork.filePath,
                startTime:homeWork.startTime,
                endTime:homeWork.endTime,
            }
        )
    )
}


/**
 * 批改作业
 * @param correctHomework
 * @constructor
 */
function Ketangpai_STUDENTHOMEWORK_MARKING(correctHomework:any){
    return(
        axios.post(
            "/api/studentHomework/marking",
    {
        commitState:correctHomework.commotState,
        grade:correctHomework.grade,
    }
        )
    )
}

/**
 * 提交作业
 * @constructor
 */
function Ketangapi_STUDENTHOMEWORK_COMMIHOMEWORK(homeInfo:any){
    return(
        axios.post(
            "/api/studentHomework/commitHomework",
            {
                homeworkId:homeInfo.homeworkId,
                studentId:homeInfo.studentId,
                grade:homeInfo.grade,
                remark:homeInfo.remark,
                filePath:homeInfo.filePath,
                commitState:"0"
            }
        )
    )
}


/**
 * 查看学生提交作业
 * @param studentHomeworkId
 * @constructor
 */
function Ketangapi_STUDENTHOMEWORK_VIEWCOMMIT(studentHomeworkId:any){
    return(
        axios.get(
            "/api/studentHomework/viewCommit",
            {
                params:{
                    studentHomeworkId:studentHomeworkId
                }
            }
        )
    )
}

// function Ketangpain_STUDNENTHOMEWORK_GETALLHOMEWORKINFO(homeworkId: string) {
//     return(
//         axios.get(
//             "/api/studentHomework/getAllHomeworkInfo",
//             {
//                 params: {
//                     homeworkId: homeworkId
//                 }
//             }
//         )
//     )
// }

function Ketangpai_STUDENTHOME_WARKING(studentHomework:any){
        return(
            axios.post(
                "/api/studentHomework/marking",
                {
                    id:studentHomework.id,
                    homeworkId : studentHomework.homeworkId,
                    studentId : studentHomework.studentId,
                    commitState : studentHomework.commitState,
                    grade: studentHomework.grade,
                    remark:studentHomework.remark,
                    filePath:studentHomework.filePath,
                }
            )
        )
}



export {
    /**
     * 发布作业
     * @param homeWorkFile
     * @constructor
     */
        Ketangpai_STUDENTHOMEWORK_CREATHOMEWORK,
    /**
     * 删除作业
     * @param homeWorkID
     * @constructor
     */
        Ketangpai_STUDENTHOMEWORK_DELETEHOMEWORK,
    /**
     * 获取作业信息
     * @param courseId
     * @constructor
     */
        Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK,
    /**
     * 修改作业
     * @param homeWork
     * @constructor
     */
        Ketangpai_STUDENTHOMEWORK_UPDATEHOMEWORK,

    /**
     * 获取作业详情信息
     */
        Ketangpai_STUDENTHOMEWORK_CORRECTING,
    /**
     * 查询所有学生作业信息
     */
    Ketangpain_STUDNENTHOMEWORK_GETALLHOMEWORKINFO,

    Ketangapi_STUDENTHOMEWORK_COMMIHOMEWORK,

    Ketangapi_STUDENTHOMEWORK_VIEWCOMMIT,

    Ketangpai_STUDENTHOME_WARKING,
}



