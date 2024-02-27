import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './Components/Header';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <button>Button</button>
        <Button>React Butoon</Button>
      </BrowserRouter>
    </div>
  );
}

export default App;
