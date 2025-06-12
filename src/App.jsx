import './App.css';
import Encabezado from './Components/Encabezado.jsx';
import Acerca from './Components/Acerca.jsx';
import Estudios from './Components/Estudios.jsx'
import Habilidades from './Components/Habilidades.jsx';


function App() {
  return (
    <div className="App">
      <Encabezado />
      <main className="container">
        <Acerca />
        <Estudios />
        <Habilidades />
      </main>
    </div>
  )
}

export default App;