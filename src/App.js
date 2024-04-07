import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/aboutUs/About';
import Shop from './Components/shop/Shop';
import Contact from './Components/contactUs/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about-us' exact element={<About/>}/>
        <Route path='/shop' exact element={<Shop/>}/>
        <Route path='/contact-us' exact element={<Contact/>}/>
              </Routes>
    </BrowserRouter>
  );
}

export default App;
