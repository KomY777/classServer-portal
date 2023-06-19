import styled from "styled-components";

const Wrapper = styled.div`
text-align: left;
.ButtonEnroll{
  width: 100%;
  height: 40px;
  font-size: 20px;
}
`

const SelectIdentity = styled.div`
text-align: left;

`

const TitleSI = styled.div`
//text-align: left;
  font-size: 16px;
  font-weight: bold;

`
const ContentLine = styled.div`
  text-align: left;
  display: inline-block;
  font-weight: bold;
  width: 100%;
  .ButtonTeacher {
    width: 50%;
    font-size: 30px;
    line-height: 35px;
    height: 50px;
    border: 0;
    float: left;
  }
  .ButtonStudent {
    height: 50px;
    line-height: 35px;
    width: 50%;
    border: 0;
    font-size: 30px;
    float: right;
  }
`

const GoLogin = styled.div`
  text-align: right;
  .loginButton{
    width: 60px;
    border: 0;
    color: #1E90FF;
  }
`



export {
    TitleSI,
    Wrapper,
    GoLogin,
    SelectIdentity,
    ContentLine,
}



