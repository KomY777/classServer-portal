import styled from "styled-components";



const Wrapper = styled.div`
  width: 1150px;
  margin: auto;
  .ant-card-body{
    padding: 0px;
  }
`

const TopCard = styled.div`
  //width: 100%;
  height: 100px;
  padding: 20px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;

`
const Time = styled.div`
  color: white;
  opacity: 0.6;
  font-size: 12px;
`
const CourseTitle = styled.div`
  color: white;
  line-height: 32px;
  font-size: 18px;
  font-weight: 500;
`


const Classes = styled.div`
  color: white;
  line-height: 24px;
  //font-size: 18px;
  font-weight: 500;
`

const QOWrapper = styled.div`
  margin-top: 10px;
  color: white;
  line-height: 24px;
  font-weight: 500;
`



export {
    Wrapper,
    TopCard,
    Time,
    CourseTitle,
    Classes,
    QOWrapper,
}