import React from "react";
import {Description, LeftButton} from "./styled";
import {Button} from "antd";



export default ()=>{
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
                    1.安装Python和jupyter
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
                        提交起止时间： 23/02/22 09:40~23/02/28 23:59
                    </Button>
                </div>
                <div>1.任务：安装Python和Jupyter。</div>
                <div>2.课堂派提交：两个的安装过程描述（要求格式规范，层次清楚，逻辑合理）。注意提交word附件页面的顶端标</div>
                <div>3.根.据【资料】【jupyter课件】中的下面三个文件指导安装：</div>
            </div>
        </Description>
    )
}