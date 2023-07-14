// import logo from './logo.svg';
// import './App.css';
import {Routes,Route} from 'react-router-dom'
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Fridge from './Components/Fridge';
import Machine from './Components/Machine';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/' exact element={<Home/>}/>
       <Route path='/fridge' exact element={<Fridge/>}/>
       <Route path='/Machine'exact element={<Machine/>}/>
       {/*<Route path='/Terms' element={<Terms/>}/>
       <Route path='/Privacy' element={<Privacy/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/About' element={<About/>}/> */}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
