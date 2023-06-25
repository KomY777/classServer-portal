import React, {useEffect, useState} from "react";
import imgWork from "../../../../../../Static/img_1.png";
import {BottomFrame, CodeImg, Description, DescriptionRight, LeftButton, TitleByCourse} from "./styled";
import {Button, Divider, Form, Input, Upload, UploadProps} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {promises} from "fs";
import {Ketangpai_STUDENTHOMEWORK_CORRECTING} from "../../../../../../api/ketangpai/HomeWork";

interface homework{
    title:string,
    endTime:string,
}

export default () => {



    const [homeWorkData,setHomeWorkData] = useState<homework>({
        title:"",
        endTime:"",
    });

    useEffect(()=>{
        Ketangpai_STUDENTHOMEWORK_CORRECTING(`${localStorage.getItem("homeworkId")}`).then(req=>{
            if (req.data.code == 200){
                const dataA = req.data.data
                setHomeWorkData({
                    title:dataA.title,
                    endTime:dataA.endTime,
                })
            }
        })
    },[])





    return (
        <div>
            <div
                style={{
                    height: "100px",
                    margin: "0",
                    borderBottom: " 2px gainsboro solid",
                }}
            >
                <CodeImg>
                    <img src={imgWork}/>
                    <div>作业</div>
                </CodeImg>
                <DescriptionRight>
                    <TitleByCourse>{homeWorkData.title}</TitleByCourse>
                    <Description>
                        <Button
                            className="buttonD"
                        >个人作业</Button>
                        <Button
                            className="buttonD"
                        >提交起止时间：{homeWorkData.endTime}</Button>
                        <Button
                            className="unButtonD"
                        >100分</Button>
                    </Description>
                </DescriptionRight>
            </div>
            <LeftButton>提交内容</LeftButton>
            <BottomFrame>
                <div
                    className="LineTop"
                >
                    <div
                        className="LineTopLeft"
                    >教师评语
                    </div>
                    <div
                        className="LineTopRight"
                    >成绩
                    </div>
                </div>
                <div
                    className="LineOneTop"
                >
                    <div
                        className="LineOneTopLeft"
                    >暂无
                    </div>
                    <div
                        className="LineOneTopRight"
                    >分数未公布/100
                    </div>
                </div>
                <div
                    className="workName"
                >作业附件
                </div>
                <div
                    className="workNumber"
                >1个
                </div>
                <div>
                    <Upload
                        onChange={file=>{
                            console.log(file)
                        }}
                    >
                        <Button icon={<UploadOutlined/>}>Upload</Button>
                    </Upload>
                </div>
            </BottomFrame>
        </div>
    )
}