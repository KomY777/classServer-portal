import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  line-height: 64px;
  top: 0px;
  left: 0px;
  background-color: white;
  box-shadow: 0 1px 0 0 #dfdfdf;
  z-index: 999;
`

const Left = styled.img`
  width: auto;
  height: 28px;
  float: left;
  margin-top: 18px;
`
const MiddleWrapper = styled.div`
  height: 64px;
  margin: auto;
  width: 900px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: #4285f4;
`

const Right = styled.div`
  width: auto;
  position: fixed;
  top: 0px;
  right: 0px;
  height: 64px;
  float: right;
  display: inline-block;
  margin-right: 50px;
`



export {
    Wrapper,
    Left,
    Right,
    MiddleWrapper,
}