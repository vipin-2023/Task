import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import FormPage from './pages/form/FormPage';
import ResultPage from './pages/result/ResultPage';
import NotFound from './components/notfound/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form/:username" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
