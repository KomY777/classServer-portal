import React, {useEffect, useState} from 'react';
import {Empty, Collapse} from 'antd';
import {Wrapper} from "./styled";
import ClassCard from "../../../../../components/ClassCardStudent/ClassCardStudent";
import {Ketangpai_STUDENTCOURSE_GETCOURSE} from "../../../../../../api/ketangpai/StudentCourse";


const {Panel} = Collapse;

export interface cardData {
    id: string,
    courseName: string,
    className: string,
    courseState: string,
    teacherId: string,
    academicYear: string,
    semester: string,
    teacherName:string,
    courseCode: string,
}

export default () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    const [topDatas, setTopDatas] = useState<Array<cardData>>([]);


    useEffect(() => {
        // console.log(localStorage.getItem("userId"))
        Ketangpai_STUDENTCOURSE_GETCOURSE(localStorage.getItem("userId")).then(req => {

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
                <Panel header="课程" key="1">

                    {
                        topDatas.length !==0?topDatas.map((item) => (
                            <ClassCard
                                id={item.id}
                                courseName={item.courseName}
                                className={item.className}
                                teacherName={item.teacherName}
                                courseState={item.courseState}
                                teacherId={item.teacherId}
                                academicYear={item.academicYear}
                                semester={item.semester}
                                courseCode={item.courseCode}
                                url={"/student/course/learn"}
                                isTop={true}
                            />
                        )):<Empty description="暂无课程" />
                    }
                    {/*{topDatas.map((item)=>(*/}
                    {/*    <ClassCard*/}
                    {/*        id={item.id}*/}
                    {/*        courseName={item.courseName}*/}
                    {/*        className={item.className}*/}
                    {/*        teacherName={item.teacherName}*/}
                    {/*        courseState={item.courseState}*/}
                    {/*        teacherId={item.teacherId}*/}
                    {/*        academicYear={item.academicYear}*/}
                    {/*        semester={item.semester}*/}
                    {/*        courseCode={item.courseCode}*/}
                    {/*        url={"/student/course/learn"}*/}
                    {/*        isTop={true}*/}
                    {/*    />*/}
                    {/*))}*/}
                </Panel>
            </Collapse>
        </Wrapper>
    );
};