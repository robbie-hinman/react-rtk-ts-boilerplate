import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './features/HomePage/App';
import NotFoundPage from './features/NotFoundPage/NotFoundPage';

const RootComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};

export default RootComponent;
