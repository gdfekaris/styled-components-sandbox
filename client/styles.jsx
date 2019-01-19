import styled, { createGlobalStyle, keyframes } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const rainbow = keyframes`
  0%{background-position: 0% 82%}
  50%{background-position: 100% 19%}
  100%{background-position: 0% 82%}
`;

const ClickMe = styled.button`
  position: relative;
  display: flex;
  height: 7vh;
  width: 140px;
  margin: auto;
  border: 1px solid #1919FF;
  border-radius: 3px;
  outline: none;
  justify-content: center;
  background-color: ${props => props['data-color'].basic};
  box-shadow: 0px 5px 0px #BBBBBB, inset 0px -2px 5px #CCCCCC;
  font: 3vh Arial, sans-serif;
  letter-spacing: 1px;
  color: #1919FF;
  overflow-y: hidden;
  :hover {
    color: white;
    background-color: #1919FF;
    box-shadow: 0px 5px 0px #BBBBBB, inset 0px -2px 5px #0000E5;
    transition: background-color 150ms ease;
  }
  :focus:active {
    border: none;
    color: black;
    letter-spacing: 0.5px;
    transform: translate(0px, 3px);
    box-shadow: 0px 2px 0px #9A9A9A;
    transition: all 40ms ease-in-out;
    background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
    background-size: 1800% 1800%;
    animation: ${rainbow} 3s linear infinite;
  }
`;

const Title = styled.span`
  position: relative;
  display: flex;
  text-align: center;
  margin auto;
  font: 7vh Impact, sans-serif;
  letter-spacing: 1px;
  color: white;
`;

const Banner = styled.div`
  position: absolute;
  display: flex;
  height: 20%;
  width: 100%;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  background-color: #1919FF;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  overflow-y: hidden;
  height: 100%;
  width: 100%;
  background-color: #F2F2F2;
  :focus-within:active {
    ${Title} {
      color: black;
    }
    ${Banner} {
      background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
      background-size: 1800% 1800%;
      animation: ${rainbow} 3s linear infinite;
    }
  }
`;

export { GlobalStyle, ClickMe, Title, Banner, Container  }