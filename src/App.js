import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';

import Container from './layout/Container';
import Usuario from './pages/Usuarios';
import Discipline from './pages/Discipline';
import Aulas from './pages/Aulas';
import Inscricao from './pages/Inscricao';
import Disponibilidade from './pages/Disponibilidade';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard/>
        <Container>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/usuarios" element={<Usuario />} />
            <Route path="/discipline" element={<Discipline />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="/inscricao" element={<Inscricao />} />
            <Route path="/disponibilidade" element={<Disponibilidade />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
