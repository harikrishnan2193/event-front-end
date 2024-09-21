import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import Events from './pages/Events';
import Marriage from './pages/Marriage';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { useContext } from 'react';
import { isTokenContext } from './context/ContextShare';

function App() {

  const { isToken, setIsToken } = useContext(isTokenContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/event' element={isToken ? <Events event /> : <Landing />} />
        <Route path='/mevent' element={isToken ? <Marriage mevent /> : <Landing />} />
        <Route path='/login' element={<Login login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={isToken ? <Checkout /> : <Landing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
