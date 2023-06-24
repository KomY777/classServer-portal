import styled from "styled-components";


const TopCard = styled.div`
  height: 100px;
  padding: 20px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`

const BottomCard = styled.div`
  margin-left: 20px;
  line-height: 50px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  float: left;
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
  font-weight: 500;
`

const QOWrapper = styled.div`
  margin-top: 10px;
  color: white;
  line-height: 24px;
  font-weight: 500;
`


const RightBottom = styled.div`
  float: right;
  position: relative;
  //top: 55px;
  line-height: 50px;
  margin-right: 20px;
`







export {
    TopCard,
    Time,
    CourseTitle,
    Classes,
    QOWrapper,
    BottomCard,
    RightBottom,
}