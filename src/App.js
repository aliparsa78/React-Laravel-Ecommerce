import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='add-product' element={<AddProduct />} ></Route>
          <Route path='update-product' element={<UpdateProduct />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
