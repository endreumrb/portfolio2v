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
  color: #FEFCFB;
  background-color: #f53b57;
  display: inline-block;
`

export const Sobre = styled.div`
  display: flex;
  height: calc(100vh - 4rem);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }
`