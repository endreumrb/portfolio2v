import { GlobalStyle, Conteudo, Botao } from './styles';
import fotoMinha from '../../Assets/imagens/euBranco.jpeg';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Conteudo>
        <img alt="Endreu Benites" src={fotoMinha}></img>
        <Botao>Front End</Botao>
        <p>Sou desenvolvedor front-end<br/>Utilizo como principal ferramenta de trabalho, o React!</p>
      </Conteudo>
    </>
  );
}
