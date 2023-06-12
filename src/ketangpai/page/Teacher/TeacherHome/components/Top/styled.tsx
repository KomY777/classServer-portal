import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  line-height: 64px;
  top: 0px;
  left: 0px;
  background-color: beige;
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
  height: 64px;
  float: right;
`



export {
    Wrapper,
    Left,
    Right,
    MiddleWrapper,
}