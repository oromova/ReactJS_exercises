import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin: 20px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  background: coral;
  background-repeat: 8px;
  color: white;
  border-radius: 8px;
  margin-bottom: 10px;
  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

export const ActiveButton = styled(Button)`
  height: 50px;
`

const common = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  background: coral;
  background-repeat: 8px;
  color: white;
  border-radius: 8px;
  margin-bottom: 10px;
  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`

export const CommonButton = styled.div`
  ${common}
`;

export const CommonButtonTwo = styled('div')`
  ${common}
  height: 60px;
`;

export const Rotate = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
border-radius: 50%;
border: 2px solid coral;
animation: ${rotate} 2s linear infinite;
`