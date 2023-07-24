// import logo from './logo.svg';
// import './App.css';
import {Routes,Route} from 'react-router-dom'
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Fridge from './Components/Fridge';
import Machine from './Components/Machine';
import ThankYou from './Components/Thankyou';
import PopupForm from './Components/PopupForm';

// import 'animate.css';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/' exact element={<Home/>}/>
       <Route path='/fridge' exact element={<Fridge/>}/>
       <Route path='/Machine'exact element={<Machine/>}/>
       <Route path="/Thankyou" exact element ={<ThankYou/>}/>
    </Routes>
    <PopupForm/>
    <Footer/>
    </>
  );
}

export default App;
