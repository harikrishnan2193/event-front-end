import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
// import Header from './components/Header';
import Footer from './components/Footer';
import Events from './pages/Events';
import HomeParty from './pages/HomeParty';
import Marriage from './pages/Marriage';
import OfficialEvents from './pages/OfficialEvents';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { useContext } from 'react';
import { isTokenContext } from './context/ContextShare';

function App() {

  const {isToken,setIsToken} = useContext(isTokenContext)
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/event' element={isToken?<Events event/>:<Landing/>} />
        <Route path='/hevent' element={<HomeParty/>} />
        <Route path='/mevent' element={isToken?<Marriage mevent/>:<Landing/>} />
        <Route path='/oevent' element={<OfficialEvents/>} />
        <Route path='/login' element={<Login login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={isToken?<Checkout/>:<Landing/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
