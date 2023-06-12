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
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  width: 300px;
  height: 350px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .Right{
    width: 80%;
  }
  .Left{
    margin-top: 10px;
  }
  
`

export {
    Wrapper,
    WrapperChild,
}