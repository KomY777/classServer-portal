import React, {useEffect, useState} from "react";
import {Description, LeftButton} from "./styled";
import {Button, Input} from "antd";
import {Ketangpai_STUDENTHOMEWORK_CORRECTING} from "../../../../../../api/ketangpai/HomeWork";
import {UploadOutlined} from "@ant-design/icons";
import axios from "axios";

interface homework{
    title:string,
    endTime:string,
    descript:string,
}

export default ()=>{
    const downloadFile = () => {
        window.open("F:/title.docx")
        // const file_path = 'tle'
        // const URL = 'F:/title.docx'
        // // 创建a标签
        // let a= document.createElement("a");
        // // 设置下载文件的文件名
        // a.download = file_path;
        // // 设置下载文件url
        // a.href = URL;
        // // 设置点击事件
        // a.click();
    }
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
                    {/*1.安装Python和jupyter*/}
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
                        提交起止时间:{homeWorkData.endTime}
                    </Button>
                </div>
                <div>
                    {homeWorkData.descript}
                </div>
                <div
                    style={{
                        marginTop:"20px"
                    }}
                    >
                    <Button
                            onClick={downloadFile}
                            icon={<UploadOutlined/>}
                        >
                            {/*<Input type='file' />*/}
                            {/*<a type href="F:/title.docx">*/}
                                下载作业文件
                            {/*</a>*/}
                        </Button>
                </div>
            </div>
        </Description>
    )
}