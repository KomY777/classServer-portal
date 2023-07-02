import React from 'react';
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import Teacher from "./ketangpai/page/Teacher/Teacher";
import Student from "./ketangpai/page/Student/Student";
import Home from "./ketangpai/page/Home";
import Login from "./ketangpai/page/Home/components/Login";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/login/*"} element={<Home/>}/>
            <Route path={"/teacher/*"} element={<Teacher/>}/>
            <Route path={"/student/*"} element={<Student/>}/>
            <Route path={"/"}
                   element={<Navigate to="/login/user" />}
            />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
