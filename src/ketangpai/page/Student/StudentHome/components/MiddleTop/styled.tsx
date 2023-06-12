import styled from "styled-components";



const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
  margin-top: 70px;
  .ant-card-body{
    padding: 0px;
  }
`


const HeaderBottomWrapper = styled.div`
  width: 1080px;
  margin-left: 20px;
  margin-right: 20px;
  display: inline-block;
`


const HeaderBottomLeft = styled.div`
  font-size: 20px;
  float: left;
`

const HeaderBottomRight = styled.div`
  float: right;
`


export {
    Wrapper,
    HeaderBottomLeft,
    HeaderBottomRight,
    HeaderBottomWrapper,
}