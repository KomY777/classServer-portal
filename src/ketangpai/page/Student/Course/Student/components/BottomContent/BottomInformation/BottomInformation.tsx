import React from "react";
import {ButtonInformation, Description, Wrapper} from "./styled";


export default () => {
    return (
        <Wrapper>
            <ButtonInformation>
                基本信息
            </ButtonInformation>
            <Description>
                <div
                    style={{
                        marginBottom: "20px",
                        fontSize: "18px"
                    }}
                >基本信息
                </div>
                <div
                    style={{
                        border: "1px solid #dadce0",
                        borderLeft:"5px #4285f4 solid",
                        borderRadius: "5px",
                    }}

                >
                    <div
                        className="line"
                    >
                        <div
                            className="left"
                        >
                            课程名称
                        </div>
                        python程序设计与数据分析
                    </div>
                    <div
                        className="line"
                    >
                        <div
                            className="left"
                        >
                            教学班级
                        </div>
                        121230201,02,03,04
                    </div>
                    <div
                        className="line"
                    >
                        <div
                            className="left"
                        >
                            学年-学期
                        </div>
                        2022-2023 第二学期
                    </div>
                </div>
            </Description>
        </Wrapper>
    )
}