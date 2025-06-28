import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RulesPage from './pages/RulesPage';
import JoinPage from './pages/JoinPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regras" element={<RulesPage />} />
      <Route path="/entrar" element={<JoinPage />} />
    </Routes>
  </Router>
);

export default App;
