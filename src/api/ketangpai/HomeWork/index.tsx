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
                filePath:homeWork.filePath,
                startTime:homeWork.startTime,
                endTime:homeWork.endTime,
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
}



