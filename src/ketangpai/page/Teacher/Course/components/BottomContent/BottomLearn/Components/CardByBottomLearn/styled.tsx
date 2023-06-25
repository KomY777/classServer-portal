import styled from "styled-components";

const Wrapper = styled.div`
  width: 1250px;
  height: 100px;
  //background-color: red;
  //margin-left: 20px;
  margin: 20px;
  border: 1px solid #e7ebf0;
  border-radius: 8px;
`

const TitleByCourse = styled.div`
  font-size: 20px;
  width:fit-content;`
const Description = styled.div`
  display: inline-block;
`

const Time = styled.div`
  display: inline-block;

`

const StateCode = styled.div`
  display: inline-block;
  &:before{
    content: "|";
    color: #DCDFE6;
    margin-left: 10px;
    margin-right: 10px;
  }

`

const MyselfWork = styled.div`
  display: inline-block;
  &:before{
    content: "|";
    color: #DCDFE6;
    margin-left: 10px;
    margin-right: 10px;
  }
`
const MyUpdate = styled.div`
  display: inline-block;
  &:before{
    content: "|";
    color: #DCDFE6;
    margin-left: 10px;
    margin-right: 10px;
  }
`


const CodeImg = styled.div`
  width: 80px;
  position: relative;
  top: 15px;
  text-align: center;
`
const CodeImgBottom = styled.div`


`

const DescriptionRight = styled.div`
  position: relative;
  top: -66px;
  left: 85px;
  line-height: 30px;
`


export {
    CodeImg,
    Wrapper,
    CodeImgBottom,
    TitleByCourse,
    Description,
    Time,
    DescriptionRight,
    MyselfWork,
    StateCode,
    MyUpdate,
}