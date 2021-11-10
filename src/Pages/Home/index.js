import { GlobalStyle, Conteudo, Botao } from './styles';
import fotoMinha from '../../Assets/imagens/euBranco.jpeg';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Conteudo>
        <img alt="Endreu Benites" src={fotoMinha}></img>
        <Botao>Front End</Botao>
        <p>Prazer, meu nome é Endreu Benites e sou Desenvolvedor Front-End<br/>Para tirar minhas ideias do papel, utilizo como principal ferramenta o ReactJS</p>
      </Conteudo>
    </>
  );
}
