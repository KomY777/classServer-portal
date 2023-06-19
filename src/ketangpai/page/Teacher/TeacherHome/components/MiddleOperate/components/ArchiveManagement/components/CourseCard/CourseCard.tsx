import React from "react";
import {Card, Divider} from "antd";
import {DivImg, gridStyle} from "./styled";
import TopIMGPNG from "../../../../../../../../../../Static/TopImg/27.png";




export default ()=>{
    return(
        <Card.Grid
        style={gridStyle}
        >
            <DivImg
                style={{
                    backgroundImage:`url(${TopIMGPNG})`,
                }}
            >
                &nbsp;加课码&nbsp;&nbsp;TMJLJ8
            </DivImg>
            <div style={{
                lineHeight:"20px",
                display:"inline-block"
            }}>
                <div>121230203-04</div>
                <div
                    style={{
                        fontSize:"20px",
                        margin:"5px 0px"
                    }}
                >程序设计基础（C）</div>
                <div>成员79人</div>
            </div>
            <Divider/>
        </Card.Grid>
    )
}