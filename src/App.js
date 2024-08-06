import './App.css';
import Menu from './components/Menu';
import CardEntrada from './components/CardEntrada';
import CardFinal from './components/CardFinal';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import FullStack from './components/FullStack';


function App() {
  return (
    <div className="App">
      <Menu/>
      <CardEntrada/>
      <FrontEnd/>
      <BackEnd/>
      <FullStack/>
      <CardFinal/>
    </div>

  );
}

export default App;
