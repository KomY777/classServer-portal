import styled from "styled-components";

const TitleByCourse = styled.div`
  font-size: 20px;
`
const Description = styled.div`
  display: inline-block;
`


const CodeImg = styled.div`
  width: 80px;
  position: relative;
  top: 15px;
  text-align: center;
`


const DescriptionRight = styled.div`
  position: relative;
  top: -56px;
  left: 85px;
  line-height: 30px;
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
  .unButtonD{
    border-radius: 4px;
    border-color: white;
    height: 15px;
    line-height: 0px;
    font-size: 12px;
    background-color: white;
    color: darkgrey;
  }
`

const LeftButton=styled.div`
  font-size: 20px;
  margin: 20px 0px;
  padding-bottom: 40px;
`

const BottomFrame=styled.div`
  border: black 1px solid;
  font-size: 16px;
  height: 300px;
  padding: 20px;
  background-color: #f8f9fa;
  .LineTop{
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
  }
  .LineTopLeft{
    float: left;
    display: inline-block;
  }
  .LineTopRight{
    width: 20%;
    text-align: center;
    display: inline-block;
    float: right;
  }

  .LineOneTop{
    line-height: 50px;
    //margin-top: 20px;
  }
  .LineOneTopLeft{
    width: 80%;
    font-size: 14px;
    min-height: 50px;
    background-color: white;
    float: left;
    //padding-left:20px ;
    display: inline-block;
  }
  .LineOneTopRight{
    font-size: 24px;
    width: 20%;
    text-align: center;
    display: inline-block;
    float: right;
  }
  
  .workName{
    width: 80px;
    height: 80px;
    line-height: 80px;
    display: inline-block;

  }
  .workNumber{
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 12px;
    color: #74787c;
    display: inline-block;
  }
`


export {
    CodeImg,
    TitleByCourse,
    Description,
    DescriptionRight,
    LeftButton,
    BottomFrame,
}