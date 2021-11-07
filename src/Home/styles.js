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
  
  body {
    background-color: #212121;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`

export const NavBar = styled.nav`
  display: flex;
  background-color: #181818;
  padding: 0 20rem;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  ul {
    display: flex;
  }

  ul li {
    list-style-type: none;
    margin-left: 3rem;
  }

  ul li a {
    text-decoration: none;
    color: #FEFCFB;
    font-size: 1.1rem;
  }

  ul li a:hover {
    color: #f53b57;
  }
`

export const Titulo = styled.h2`
  color: #FEFCFB;
  letter-spacing: .75px;
  font-size: 1.5rem;
  user-select: none;

  span {
    color: #f53b57;
  }
`
export const Botao = styled.div`
  background-color: #f53b57;
  display: inline-block;
  font-size: 1rem;
  padding: .25rem 1rem;
  margin: 1rem 0;
  border-radius: 5px;
`
export const Sobre = styled.div`
  display: flex;
  // height: calc(100vh - 4rem); - Centralizar Conteúdo
  align-items: center;
  margin-top: 7.5rem;
  flex-direction: column;
  color: #FEFCFB;

  p {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.75rem;  
  }

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }
`
