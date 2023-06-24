import React, {useEffect, useState} from 'react';
import {Card, Collapse} from 'antd';
import {Classes, CourseTitle, QOWrapper, Time, TopCard, Wrapper} from "./styled";
import {QrcodeOutlined} from "@ant-design/icons";
import ClassCard from "../../../../../components/ClassCardStudent/ClassCardStudent";
import classImg from "../../../../../../Static/img.png";
import {Ketangpai_COURSE_GETCOURSE} from "../../../../../../api/ketangpai/CourseManagement";


const {Panel} = Collapse;

export interface cardData {
    id: string,
    courseName: string,
    className: string,
    courseState: string,
    teacherId: string,
    academicYear: string,
    semester: string,
    courseCode: string,
}

export default () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    const [topDatas, setTopDatas] = useState<Array<cardData>>([]);


    useEffect(() => {
        Ketangpai_COURSE_GETCOURSE(1).then(req => {
            const {data} = req;
            if (data.code == 200){
                const temp:Array<cardData>=[]
                data.data.map((item:cardData)=>{
                    // @ts-ignore
                    if (item.courseState === 0){
                        temp.push(item)
                    }
                })
                setTopDatas([...temp])
            }
        })
    },[])


    return (
        <Wrapper>
            <Collapse
                style={{marginTop: "20px"}}
                defaultActiveKey={['1']}
                onChange={onChange}
                accordion
                // bordered={false}
            >
                <Panel header="2022-2023 第二学期" key="1">
                    {topDatas.map((item)=>(
                        <ClassCard
                            id={item.id}
                            courseName={item.courseName}
                            className={item.className}
                            courseState={item.courseState}
                            teacherId={item.teacherId}
                            academicYear={item.academicYear}
                            semester={item.semester}
                            courseCode={item.courseCode}
                            url={"/student/course/learn"}
                        />
                    ))}
                </Panel>
            </Collapse>
        </Wrapper>
    );
};