import Home from './Home.js';
import Login from './Login.js';
import './App.css';
import './Nav.css';
import './Home.css';
import './Login.css';
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
