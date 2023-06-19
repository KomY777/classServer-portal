import styled from "styled-components";



const TopDivImg =styled.div`
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 24px;
  width: 1224px;
  color: white;
  height: 152px;
    
`




const CourseTitle = styled.div`
  font-size: 36px;
  //height: 100px;
`
const CourseClass = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
`

const BottomContent = styled.div`
  display: inline-block;
  margin-top: 50px;
`


const QOTitle = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-right: 16px;
`

const ClassNumbers =styled.div`
  display: inline-block;
  cursor: pointer;
`



export {
    TopDivImg,
    CourseTitle,
    CourseClass,
    QOTitle,
    ClassNumbers,
    BottomContent,
}