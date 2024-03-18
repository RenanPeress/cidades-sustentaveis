import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import Home from './components/home/home.js';
import Introducao from './components/introducao/introducao.js';
import Planejamento from './components/planejamento/planejamento.js';
import Eficiencia from './components/eficiencia/eficiencia.js';
import Gestao from './components/gestao/gestao.js';
import Mobilidade from './components/mobilidade/mobilidade.js';
import Footer from './components/footer/footer.js';
import Conclusao from './components/conclusao/conclusao.js';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Introducao />
      <Planejamento />
      <Eficiencia />
      <Gestao />
      <Mobilidade />
      <Conclusao />
      <Footer />
    </div>
  );
}

export default App;
