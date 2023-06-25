import React from "react";
import {Card} from "antd";
import {DivImg, gridStyle} from "./styled";




export default ()=>{
    return(
        <Card.Grid
        style={gridStyle}
        >
            <DivImg></DivImg>
        </Card.Grid>
    )
}