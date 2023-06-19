import styled from 'styled-components';
import bIMG from "../../../../../Static/Home/User/img.png";

const Wrapper = styled.div`
  background-image: url("${bIMG}");
  background-size:100% 100%;
  background-attachment:fixed;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: burlywood;
`
const WrapperChild = styled.div`
  //padding: 10px;
  padding: 80px 60px 10px 10px;
  width: 350px;
  margin: auto;
  margin-top: 70px;
  //position: absolute;
  //text-align: center;
  //top: 0;
  //left: 0;
  //right: 0;
  //bottom: 0;
  .Right{
    width: 80%;
  }
  .Left{
    margin-top: 10px;
  }
`


const WrapperBottom = styled.div`
  width: 100%;
  //width: 410px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  //height: 320px;
  height: auto;
`

export {
    Wrapper,
    WrapperChild,
    WrapperBottom,
}