import styled, { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const ClickMe = styled.button`
  position: relative;
  display: flex;
  height: 7vh;
  width: 130px;
  margin: auto;
  border: none;
  border-radius: 3px;
  outline: none;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 5px 0px #CCCCCC;
  :before { content: "Click me"; }
  font: 3vh Arial, sans-serif;
  letter-spacing: 1px;
  color: #0F0F0F;
  :hover {
    background-color: #0080FF;
    transition: background-color 150ms ease;
  }
  :focus:active {
    transform: translate(0px, 3px);
    box-shadow: 0px 2px 0px #9A9A9A;
    transition: all 40ms ease-in-out;
  }
`;

const Title = styled.span`
  position: relative;
  display: flex;
  text-align: center;
  margin auto;
  :before { content: "Styles"; }
  font: 7vh Impact, sans-serif;
  letter-spacing: 1px;
  color: #0F0F0F;
`;

const Banner = styled.div`
  position: absolute;
  display: flex;
  height: 20%;
  width: 100%;
  background-color: #1919FF;
  justify-content: center;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #F2F2F2;
  :focus-within:active {
    ${Title} {
      color: white;
    }
  }
`;

export { GlobalStyle, ClickMe, Title, Banner, Container  }