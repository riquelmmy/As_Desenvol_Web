import './App.css';
import ListarTarefas from './components/ListarTarefas';
import CriarTarefa from './components/CriarTarefa';

function App() {
  return (
    <div className='App'>
      <h1>Lista de Tarefas</h1>
      <ListarTarefas/>
      <div className='MeuPadding'>
        <h1>Adcionar Tarefa</h1>
      </div>
      <CriarTarefa/>
      <h4>Desenvolvido por Riquelmmy Pedrosa</h4>
    </div>
  );
}

export default App;
