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
`

export const SubTitulo = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.5rem; 
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

export const Projeto = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 3rem;
`

export const Quadro = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #656565;
  margin: 0 3rem 1.5rem 0;
  padding: 0.75rem 0rem;
  display: flex;
  flex-direction: column;
  background-color: #181818;

  h3 {
    margin: 0 0 .25rem .75rem;
  }

  h4 {
    margin: 0 0 .5rem .75rem;
  }

  p {
    margin: .5rem 0 0 .75rem;
  }
`

export const ImagemPreview = styled.img`
  width: 100%;
`

export const SocialMedia = styled.div`
  
  margin-top: auto;

  img {
    width: 24px;
    margin-left: 0.75rem;
  }

`

