import React, {useEffect, useState} from "react";
import {Description, LeftButton} from "./styled";
import {Button} from "antd";
import {Ketangpai_STUDENTHOMEWORK_CORRECTING} from "../../../../../../api/ketangpai/HomeWork";

interface homework{
    title:string,
    endTime:string,
    descript:string,
}

export default ()=>{

    const [homeWorkData,setHomeWorkData] = useState<homework>({
        title:"",
        endTime:"",
        descript:""
    });

    useEffect(()=>{
        Ketangpai_STUDENTHOMEWORK_CORRECTING(`${localStorage.getItem("homeworkId")}`).then(req=>{
            if (req.data.code == 200){
                const dataA = req.data.data
                setHomeWorkData({
                    title:dataA.title,
                    endTime:dataA.endTime,
                    descript:dataA.remark,
                })
            }
        })
    },[])





    return(
        <Description>
            <LeftButton>
                作业
            </LeftButton>
            <div style={{
                margin:"10px",
                padding:"10px"
            }}>
                <div
                    className="titleD"
                >
                    {homeWorkData.title}
                </div>
                <div>
                    <Button
                        className="buttonD"
                    >
                        个人作业
                    </Button>
                    <Button
                        className="buttonD"
                    >
                        提交起止时间：{homeWorkData.endTime}
                    </Button>
                </div>
                <div>
                    {homeWorkData.descript}
                </div>
            </div>
        </Description>
    )
}