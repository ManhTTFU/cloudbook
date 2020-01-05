import React, { useEffect } from "react";
import styled from "styled-components";
import { Header, Book, SideBar, Inspector } from "../../Components";
import { loadElements } from '../../utils/helpers'

const Editor = () => {
  useEffect(() => loadElements(), [])
  return (
    <>
      <Header />
      <StyledEditor>
        <SideBar />
        <Book />
        <Inspector />
      </StyledEditor>
    </>
  );
};

export default Editor;

const StyledEditor = styled.div` 
  height: calc(100vh - 50px); 
  background: lightgray; 
  display: flex; 
  flex-direction: row; 
`; 