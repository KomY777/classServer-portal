import styled from "styled-components";


const Wrapper = styled.div`
  //width: 800px;
  width: 100%;
  height: 500px;
  .ant-col {
    height: 450px;
    overflow: auto;
  }

`

const LeftDiv = styled.div`
  //width: 180px;
  width: 18%;
  text-align: right;
  height: 450px;
  float: left;
  border-top: brown solid 1px;

`
const RightDiv = styled.div`
  width: 80%;
  height: 450px;
  overflow: auto;
  overflow-x: hidden;
  float: right;
  border: 1px solid #dadce0;

`

export {
    Wrapper,
    LeftDiv,
    RightDiv,
}