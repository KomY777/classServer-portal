import styled from "styled-components";


const Wrapper = styled.div`
  //background-color: red;
  width: 1272px;
  margin: auto;
  margin-top: 70px;

`

const Description = styled.div`
  width: 1248px;
  border-radius: 4px;
  border: 1px solid #ccc;
  
  .titleD{
    font-size: 16px;
    font-weight: 500;
    margin-right: 5px;
    max-width: 670px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .buttonD{
    border-radius: 4px;
    border-color: #d9e7fd;
    width: auto;
    height: 15px;
    line-height: 0px;
    font-size: 12px;
    background-color: #ecf3fe;
    color: #4285f4;
    margin: 10px 10px 10px 0px;
  }
  
`

const LeftButton = styled.div`
  position: relative;
  border-radius: 2px;
  background-color: #31ccd2;
  top: 0;
  left: 0;
  width: 60px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: white;
`



export {
    Wrapper,
    Description,
    LeftButton,
}