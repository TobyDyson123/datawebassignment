import Home from './Home.js';
import './App.css';

import './Nav.css';
import './Home.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
