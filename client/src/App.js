import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Products from './components/Products';

function App() {
  return (
    <Router>
    <Login/>

  </Router>
  );
}

export default App;
