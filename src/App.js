// import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/Navbar1';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import { AuthProvider }  from './Context/AuthContext';
function App() {
  return (
    <div>
    <AuthProvider>
    <Navbar1 />
    <SignUp />
    <Header />
    <Products />
    <Footer />
    </AuthProvider>
    </div>
  );
}

export default App;
