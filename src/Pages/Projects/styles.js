import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Slab', 'Roboto Slab', serif;
    font-weight: 600;
  }
`
