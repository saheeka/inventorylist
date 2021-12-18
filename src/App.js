
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
    <div className="App">
      <Container>
        <Routes>
      <Route  path='/' element={<Home/>}/>
      
        </Routes>
        
      </Container>
    </div>
    </Router>
  );
}

export default App;
