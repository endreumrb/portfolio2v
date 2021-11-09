import { Conteudo, Botao, SubTitulo, Projeto, Quadro, ImagemPreview, SocialMedia } from './styles';
import React, { useEffect } from 'react';

import listaProjetos from './../../Assets/script/projetos';
import githubImagem from '../../Assets/imagens/github.png';
import websiteImagem from '../../Assets/imagens/website.png';

export default function Projects() {

  return (
    <>
      <Conteudo>
        <Botao>Projetos</Botao>
        <SubTitulo>Aqui estão os meus projetos pessoais e profissionais<br/>Disponibilizo tanto o live preview do site, quanto o código, hospedado no Github</SubTitulo>
        <Projeto>
          {listaProjetos.map((element,i) => 
            <Quadro>
              <h3>{element.titulo}</h3>
              <h4>{element.data}</h4>
              <ImagemPreview src={element.imagem_preview}></ImagemPreview>
              <p>{element.sobre}</p>
              <SocialMedia>
                <img src={githubImagem}></img>
                <img src={websiteImagem}></img>
              </SocialMedia>
            </Quadro>
          )}
        </Projeto>
      </Conteudo>
    </>
  );
}
