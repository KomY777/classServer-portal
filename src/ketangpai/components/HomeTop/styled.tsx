import styled from "styled-components";


const Wrapper = styled.div`
  width: 1200px;
  height: 55px;
  //position: fixed;
  display: flex;
  background-color: chartreuse;
  margin: auto;
  .ant-menu-title-content{
    font-size: 20px;
  }
  
`

const Left = styled.div`
  float: left;
  margin-right: 30px;
`

const Right  = styled.div`
  float: right;
  line-height: 55px;
  
`

export {
    Wrapper,
    Left,
    Right,
}