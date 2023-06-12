import styled from 'styled-components';

const Wrapper = styled.div`
`
const WrapperChild = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  width: 300px;
  height: 350px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .Right{
    width: 80%;
  }
  .Left{
    margin-top: 10px;
  }
  
`

export {
    Wrapper,
    WrapperChild,
}