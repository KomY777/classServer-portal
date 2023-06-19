import React from "react";
import {
    CodeImg,
    CodeImgBottom,
    Description,
    DescriptionRight,
    MyselfWork,
    StateCode,
    Time,
    TitleByCourse,
    Wrapper
} from "./styled";
import imgWork from "../../../../../../../../../Static/img_1.png"
import {useNavigate} from "react-router-dom";




export default ()=>{

    const navigate = useNavigate();
    const id = 'asdasd'
    return(
        <Wrapper>
            <CodeImg>
                <img src={imgWork} />
                <CodeImgBottom>作业</CodeImgBottom>
            </CodeImg>
            <DescriptionRight>
                <TitleByCourse
                    onClick={()=>{
                        navigate(`/teacher/homeWork/detail`,{replace: true})
                    }}>1.安装Python和Jupyter</TitleByCourse>
                <Description>
                    <Time>提交截止时间：23/02/28 23:59 </Time>
                    <StateCode>已结束 </StateCode>
                    <MyselfWork>个人作业</MyselfWork>
                </Description>
                <div
                    style={{
                        color:'#4285f4'
                    }}
                >已批改</div>
            </DescriptionRight>
        </Wrapper>
    )
}