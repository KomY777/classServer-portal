import styled from "styled-components";
import {Button} from "antd";

const Wrapper = styled.div`
  height: 350px;
  text-align: left;
  margin: auto;

`

const UserName = styled.div`


`

const Password = styled.div`


`

const AnotherFunction = styled.div`

`

const AnotherFunctionLeft = styled.div`
    text-align: left;

`

const AnotherFunctionRight = styled.div`

`


const LoginButton ={
    width:"100%",
    marginTop:"25px",
    height:"40px",
    fontSize:"20px",

    // width: 100%;
    // height: 40px;
    // font-size: 20px;
    // margin:"10px 25px 10px 25px"
}

const EnrollUser = styled.div`
  display: inline-block;
  //text-align: right;
  float: right;
  margin-right: 20px;
`
const EnrollButton = {
    border:"0",
    width: "60px",
    display:"inline-block",
    color:"#1E90FF",
}


export {
    Wrapper,
    UserName,
    Password,
    AnotherFunction,
    LoginButton,
    EnrollUser,
    EnrollButton,
    AnotherFunctionRight,
    AnotherFunctionLeft,
}



