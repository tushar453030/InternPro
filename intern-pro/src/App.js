
import './App.css';
import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home';
function App() {
  return (
    <Router>
    <main className="py-3">
     <Container>
      <Routes>
        <Route path="/" element={<Home/>} exact />
      </Routes>
     </Container>
    </main>
    </Router>
  );
}

export default App;
