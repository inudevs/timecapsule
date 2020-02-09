import React from 'react';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

import Header from "./components/Header";

import Sctest from "./components/scrolltest";

function App() {

  const Wrapper = styled.div`
  margin:0;
  padding:0;
  `

  const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'NBG' ;
    src: url(${require("./assets/fonts/NanumBarunGothic.ttf")});
  }
  body{
    font-family:'NBG', sans-serif;
    margin:0;
    padding:0;
  }
  `;


  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Sctest />
    </Wrapper>
  );
}

export default App;
