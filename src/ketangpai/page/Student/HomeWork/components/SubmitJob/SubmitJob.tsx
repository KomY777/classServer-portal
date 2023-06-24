import React from "react";
import imgWork from "../../../../../../Static/img_1.png";
import {BottomFrame, CodeImg, Description, DescriptionRight, LeftButton, TitleByCourse} from "./styled";
import {Button, Divider, Form, Input, Upload, UploadProps} from "antd";
import {UploadOutlined} from "@ant-design/icons";



export default () => {


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
                    <TitleByCourse>1.安装Python和Jupyter</TitleByCourse>
                    <Description>
                        <Button
                            className="buttonD"
                        >个人作业</Button>
                        <Button
                            className="buttonD"
                        >提交起止时间： 23/02/22 09:40~23/02/28 23:59 </Button>
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
                        // onDownload={file => {
                        //     console.log(JSON.stringify(file))
                        // }}
                    >
                        <Button icon={<UploadOutlined/>}>Upload</Button>
                    </Upload>
                </div>
            </BottomFrame>
        </div>
    )
}