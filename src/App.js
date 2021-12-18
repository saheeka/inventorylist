
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './components/Dashboard';

import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>

        <AddUser />
      </Container>
    </div>
  );
}

export default App;
