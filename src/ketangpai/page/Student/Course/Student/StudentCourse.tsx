import TopImg from "./components/BottomContent/components/TopImg/TopImg";
import {Wrapper} from "./styled";
import BottomMenu from "./components/BottomContent/components/BottomMenu";
import BottomLearn from "./components/BottomContent/BottomLearn";
import {Route, Routes} from "react-router-dom";
import React, {ReactNode} from "react";
import BottomInformation from "./components/BottomContent/BottomInformation";
import Top from "./components/BottomContent/components/Top";


export default ()=>{
    return(
        <Wrapper>
            <Top/>
            <TopImg/>
            <BottomMenu/>
            <Routes>
                <Route path={"Learn"} element={<BottomLearn/>}/>
                <Route path={"Information"} element={<BottomInformation/>}/>
            </Routes>
        </Wrapper>
    )
}