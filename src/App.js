import logo from './logo.svg';
import './App.css';
import "./components/Home"
import Home from './components/Home';
import { Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import Footer from './components/Footer';
import Database from './components/Database';

function App() {
  return (
    <>
      <Router>  <Navbar />

        <Routes>




          <Route path='/' element={< Home />} />

          <Route path='/form' element={< Form />} />


        </Routes>

      </Router>
    </>
  );
}

export default App;
