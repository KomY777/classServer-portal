import React from "react";
import Middle from "./components/Middle/Middle";
import MiddleTop from "./components/MiddleTop/MiddleTop";
import Top from "../../../components/Top/Top";
import MiddleOperate from "./components/MiddleOperate";


export default ()=>{
    return(
        <div>
            <Top/>
            <MiddleTop/>
            <MiddleOperate/>
            <Middle/>
        </div>
    )
}