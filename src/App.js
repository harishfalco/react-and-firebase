// import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/Navbar1';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import { AuthProvider }  from './Context/AuthContext';
import {BrowserRouter as Router , Switch , Route, Redirect } from "react-router-dom"
import Login from './components/Login'
function App() {
  return (
    <div>
    <Router>
    <AuthProvider>
      
      <Navbar1 />
      <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      </Switch>
     <Header />
     <Products />
     <Footer />
     
      
    
    </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
