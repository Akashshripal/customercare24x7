// import logo from './logo.svg';
// import './App.css';
import {Routes,Route} from 'react-router-dom'
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Fridge from './Components/Fridge';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/fridge' element={<Fridge/>}/>
       {/* <Route path='/Machine' element={<Machine/>}/>
       <Route path='/Terms' element={<Terms/>}/>
       <Route path='/Privacy' element={<Privacy/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/About' element={<About/>}/> */}
    </Routes>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
