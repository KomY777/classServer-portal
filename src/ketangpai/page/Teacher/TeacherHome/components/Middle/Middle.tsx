import React, {useEffect, useState} from 'react';
import { Collapse, Empty} from 'antd';
import {Wrapper} from "./styled";
import ClassCardTeacher from "../../../../../components/ClassCardTeacher/ClassCardTeacher";
import {Ketangpai_COURSE_GETCOURSE} from "../../../../../../api/ketangpai/CourseManagement";
import Login from "../../../../Home/components/Login";


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
        // console.log(key);
    };

    const [topDatas, setTopDatas] = useState<Array<cardData>>([]);


    useEffect(() => {
        // console.log(localStorage.getItem("userId"))
        Ketangpai_COURSE_GETCOURSE(localStorage.getItem("userId")).then(req => {
            const {data} = req;
            if (data.code == 200){
                const temp:Array<cardData>=[]
                data.data.map((item:cardData)=>{
                    // @ts-ignore
                    if (item.courseState === 0){
                        //正常显示
                        temp.push(item)
                    }
                })
                console.log(temp)
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
            >
                <Panel header="课程" key="1">
                    {/*{topDatas.map((item)=>(*/}
                    {/*    <ClassCardTeacher*/}
                    {/*        id={item.id}*/}
                    {/*        courseName={item.courseName}*/}
                    {/*        className={item.className}*/}
                    {/*        courseState={item.courseState}*/}
                    {/*        teacherId={item.teacherId}*/}
                    {/*        academicYear={item.academicYear}*/}
                    {/*        semester={item.semester}*/}
                    {/*        courseCode={item.courseCode}*/}
                    {/*        url={"/teacher/course/learn"}*/}
                    {/*        isTop={true}*/}
                    {/*    />*/}
                    {/*))}*/}

                    {
                        topDatas.length !==0?topDatas.map((item) => (
                            <ClassCardTeacher
                                id={item.id}
                                courseName={item.courseName}
                                className={item.className}
                                courseState={item.courseState}
                                teacherId={item.teacherId}
                                academicYear={item.academicYear}
                                semester={item.semester}
                                courseCode={item.courseCode}
                                url={"/teacher/course/learn"}
                                isTop={true}
                            />
                        )):<Empty description="暂无课程" />
                    }









                </Panel>
            </Collapse>
        </Wrapper>
    );
};