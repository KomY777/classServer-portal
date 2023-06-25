import styled from "styled-components";

const gridStyle: React.CSSProperties = {
    width:"100%",
    height:"69px",
    padding:"10px",
    // backgroundColor:'red',
    // border:"1px green solid",
    display:"inline-block",
    whiteSpace:"pre-wrap",
};

const DivImg = styled.div`
  display:inline-block;
  float: left;
  width: 100px;
  height: 70px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 10px;
  font-size: 14px;
  line-height: 115px;
  color: white;
`

const Recover = styled.button`
  width: 50px;
  height: 30px;
  //color: greenyellow;
  background-color: white;
  border: 0px;
`

const Delete = styled.button`
  width: 50px;
  height: 30px;
  color: red;
  background-color: white;
  border: 0px;
  margin-right: 50px;
  margin: auto;
`


const Operate=styled.div`
  //display: inline-block;
  float: right;
  width: 20%;
  //display: block;
`



export {
    gridStyle,
    DivImg,
    Recover,
    Delete,
    Operate,
}