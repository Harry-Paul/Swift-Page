import './App.css';
import Fleet from './pages/Fleet/Fleet';
import Home from './pages/Home/Home';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/fleet" element={<Fleet/>}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
