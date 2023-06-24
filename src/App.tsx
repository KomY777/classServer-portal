import React from 'react';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Teacher from "./ketangpai/page/Teacher/Teacher";
import Student from "./ketangpai/page/Student/Student";
import Home from "./ketangpai/page/Home";
import StudentHome from "./ketangpai/page/Student/StudentHome";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/login/*"} element={<Home/>}/>
            <Route path={"/teacher/*"} element={<Teacher/>}/>
            <Route path={"/student/*"} element={<Student/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
