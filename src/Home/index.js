import { GlobalStyle, Header, NavBar, Titulo, Sobre, Botao} from './styles';

export default function Home() {
  return (
    <>
      <GlobalStyle/>
      <Header>
        <NavBar>
          <div>
            <Titulo>Endreu<span>Benites</span></Titulo>
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Projetos</a></li>
            <li><a href="/">Contato</a></li>
          </ul>
        </NavBar>
        <Sobre>
          <img src='/Eu_Branco.jpeg'></img>
          <Botao>Front End</Botao>
          <p>Sou desenvolvedor front-end <br/> Utilizo como principal ferramenta de trabalho, o React!</p>
        </Sobre>
      </Header>
    </>
  );
}
