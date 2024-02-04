import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
