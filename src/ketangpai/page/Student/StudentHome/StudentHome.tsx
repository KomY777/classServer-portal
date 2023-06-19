import React from "react";
import Top from "../../../components/Top/Top";
import Middle from "./components/Middle/Middle";
import MiddleTop from "./components/MiddleTop/MiddleTop";
import MiddleOperate from "./components/MiddleOperate";




export default ()=>{
    return(
        <div>
            <Top/>
            <MiddleTop />
            <MiddleOperate/>
            <Middle />
        </div>
    )
}