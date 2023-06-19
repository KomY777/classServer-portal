import styled from "styled-components";


const Wrapper = styled.div`

  width: 1272px;
  margin: auto;
  margin-top: 70px;
  
  .line{
    padding: 25px 46px;
    margin: 0;
    border-bottom: 1px solid #dadce0;
  }
  
  .left{
    width: 100px;
    margin-right: 30px;
    color: #606266;
    display: inline-block;
  }
  

`

const ButtonInformation = styled.button`
  border: 0px;
  background-color: white;
  border-bottom: 2px solid #4285f4;
  //padding: 0 20px;
  margin: 20px 0px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
  color: #4285f4;
  position: relative;
`


const Description = styled.div`
  background-color: #f8f9fa;
  padding: 24px;
  height: 400px;
`



export {
    ButtonInformation,
    Description,
    Wrapper,
}