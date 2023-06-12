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
  //width: 760px;
  width: 80%;
  height: 450px;
  //whiteSpace:"pre-wrap",
  //white-space: pre-wrap;
  overflow: auto;
  overflow-x: hidden;
  background-color: chocolate;
  float: right;

`

export {
    Wrapper,
    LeftDiv,
    RightDiv,
}