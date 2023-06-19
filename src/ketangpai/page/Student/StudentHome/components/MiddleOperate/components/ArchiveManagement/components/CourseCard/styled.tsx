import styled from "styled-components";

const gridStyle: React.CSSProperties = {
    width:"100%",
    height:"69px",
    padding:"10px",
    // backgroundColor:'red',
    // border:"1px green solid",
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



export {
    gridStyle,
    DivImg,
}