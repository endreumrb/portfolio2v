import { GlobalStyle, Conteudo, Botao } from './styles';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Conteudo>
        <img alt="Endreu Benites" src='/Eu_Branco.jpeg'></img>
        <Botao>Front End</Botao>
        <p>Sou desenvolvedor front-end <br/> Utilizo como principal ferramenta de trabalho, o React!</p>
      </Conteudo>
    </>
  );
}
