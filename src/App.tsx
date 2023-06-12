import React from 'react';
import Layout from "./ketangpai/Layout";
import Top from "./ketangpai/page/Student/StudentHome/components/Top/Top";
import StudentHome from "./ketangpai/page/Student/StudentHome";
import TopImg from "./ketangpai/page/Course/components/TopImg/TopImg";
import Course from "./ketangpai/page/Course";
import User from "./ketangpai/page/Home/components/User";
import {BrowserRouter} from "react-router-dom";
import TeacherHome from "./ketangpai/page/Teacher/TeacherHome";

function App() {
  return (
    <div>
        <Top/>
        <TeacherHome/>
    </div>
  );
}

export default App;
