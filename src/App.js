import Home from './Home.js';
import Login from './Login.js';
import './App.css';
import './Nav.css';
import './Home.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/~wwwucpst/P110138434'>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
