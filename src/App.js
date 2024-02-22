import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Billing from './components/Billing';
import { ViewBill } from './components/ViewBill';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/ViewBill" element={<ViewBill />} />

      </Routes>
    </Router>
  );
}

export default App;
