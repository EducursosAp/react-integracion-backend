import './App.css';
import { CatFactGenerator } from './components/CatFactGenerator';
import { Todo } from './components/Todo';

function App() {
  return (
    //React Fragment
    <>
      <h1>Frase de Gatos</h1>

      <CatFactGenerator></CatFactGenerator>
      
    </>
  );
}

export default App;
