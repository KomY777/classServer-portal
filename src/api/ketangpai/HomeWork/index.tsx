import React from "react";
import axios from "axios";

/**
 * 发布作业
 * @param homeWorkFile
 * @constructor
 */
function Ketangpai_STUDENTHOMEWORK_CREATHOMEWORK(homeWorkFile:any){
    return(
        axios.post(
            "/api/studentHomework/creatHomework",
            {
                homeworkDto:homeWorkFile
            }
        )
    )
}


/**
 * 删除作业
 * @param homeWorkID
 * @constructor
 */

function Ketangpai_STUDENTHOMEWORK_DELETEHOMEWORK(homeWorkID:string){
    return(
        axios.get(
            "/api/studentHomework/deleteHomework",
            {
                params:{
                    homeworkId:homeWorkID
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

function Ketangpai_STUDENTHOMEWORK_GETALLHOMEWORK(courseId:any){
    return(
        axios.get(
            "/api/studentHomework/getAllHomework",
            {
                params:{
                    courseId:courseId
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
function Ketangpai_STUDENTHOMEWORK_UPDATEHOMEWORK(homeWork:any){
    return(
        axios.post(
            "/api/studentHomework/updateHomework",
            {
                homeworkDto:homeWork
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
}


