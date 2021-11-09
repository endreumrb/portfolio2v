import { GlobalStyle, Header, NavBar, Titulo } from './styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home/index"
import Projects from "./Projects/index";
import Contact from './Contact/index';

export default function App() {
  return (
    <>
    <GlobalStyle/>
      <Router>
        <Header>
          <NavBar>
            <div>
              <Titulo>Endreu<span>Benites</span></Titulo>
            </div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/projetos'>Projetos</Link>
              </li>
              <li>
                <Link to='/contato'>Contato</Link>
              </li>
            </ul>
          </NavBar>
        </Header>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/projetos" element={<Projects/>} />
          <Route path="/contato" element={<Contact/>} />
        </Routes>

      </Router>
    </>
  );
}