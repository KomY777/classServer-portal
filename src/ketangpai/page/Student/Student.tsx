import {Route, Routes} from "react-router-dom";
import React from "react";
import StudentCourse from "./Course/Student";
import StudentHome from "./StudentHome";
import HomeWork from "./HomeWork";


export default ()=>{
    return(
        <Routes>
            <Route path={"/course/*"} element={<StudentCourse/>} />
            <Route path={"/studentHome"} element={<StudentHome/>} />
            <Route path={"/homeWork/*"} element={<HomeWork/>} />
        </Routes>
    )
}