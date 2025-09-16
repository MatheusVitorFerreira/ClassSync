import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Dashboard from './Componentes/pages/dashboard/';
import Discipline from './Componentes/pages/discipline';
import Aulas from './Componentes/pages/aulas';
import Inscricao from './Componentes/pages/inscricao';
import Disponibilidade from './Componentes/pages/disponibilidade';
import Alunos from './Componentes/pages/alunos';
import Inicio from './Componentes/pages/inicio';


function App() {
  return (
          <Router>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/alunos" element={<Alunos/>} />
              <Route path="/discipline" element={<Discipline />} />
              <Route path="/aulas" element={<Aulas />} />
              <Route path="/inscricao" element={<Inscricao />} />
              <Route path="/disponibilidade" element={<Disponibilidade />} />
            </Routes>
        </Router>

  );
}

export default App;
