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

export const Conteudo = styled.div`
  display: flex;
  // height: calc(100vh - 4rem); - Centralizar Conteúdo
  align-items: center;
  margin-top: 1.5rem;
  flex-direction: column;
  color: #FEFCFB;

  p {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.5rem; 
    margin-bottom: 2rem;
  }
`

export const Botao = styled.div`
  background-color: #f53b57;
  display: inline-block;
  font-size: 1rem;
  width: 6rem;
  height: 1.5rem;
  margin: 1rem 0;
  border-radius: 5px;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5rem;
  user-select: none;
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;

  textarea {
    width: 50rem;
    height: 6rem;
    margin-bottom: 1rem;
    padding: .5rem;
    font-size: 1rem;
    resize: none;
    border: 1px solid #121212;
    background-color: #212121;
    color: #FEFCFB;
    border-radius: 10px;

    :focus {
      border-bottom: 1px solid #f53b57;
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  } 
`

export const EntradaDados = styled.input`
  width: 50rem;
  height: 2rem;
  margin-bottom: 1rem;
  padding: .5rem;
  font-size: 1rem;
  border: 1px solid #121212;
  background-color: #212121;
  color: #FEFCFB;
  border-radius: 10px;

  :focus {
    border-bottom: 1px solid #f53b57;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const Enviar = styled.input`
  width: 50rem;
  height: 2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #121212;
  background-color: #212121;
  color: #FEFCFB;
  line-height: 2rem;
  cursor: pointer;
  background-color: #f53b57;
  font-weight: bolder;
  border-radius: 10px;
  transition: all .5s;

  :hover {
    background-color: #c92c44;
    font-size: 1.075rem;
    border: 1px solid #111;
  }
`

