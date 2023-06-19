import {Route, Routes} from "react-router-dom";
import BottomLearn from "./Course/components/BottomContent/BottomLearn";
import BottomInformation from "./Course/components/BottomContent/BottomInformation";
import React from "react";
import HomeWork from "./HomeWork";
import TeacherCourse from "./Course";
import TeacherHome from "./TeacherHome";


export default ()=>{
    return(
        <Routes>
            <Route path={"/course/*"} element={<TeacherCourse/>} />
            <Route path={"/teacherHome"} element={<TeacherHome/>} />
            <Route path={"/homeWork/*"} element={<HomeWork/>} />
        </Routes>
    )
}