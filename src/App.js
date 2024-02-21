 import './App.css';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Billing from './components/Billing';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/billing" element={<Billing />} />
       
    </Routes>
  </Router>
  );
}

export default App;
