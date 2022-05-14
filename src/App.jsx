import Navbar from './components/Navbar';
import './App.css';
import ChoicePage1 from './pages/Choices/ChoicePage1/ChoicePage1';
import HiAlex from './pages/HiAlex/HiAlex';
import Score from './pages/score/Score';
import Suggestions from './pages/Suggestions/Suggestions';
import Login from "./pages/login/Login"
import Signin from './pages/Signin/Signin';
import Stats from './pages/Statestics/Stats';
import Welcome from "./pages/Welcome/Welcome.jsx";
import {BrowserRouter,Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [welcome,setWelcome]= useState(true);
  
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Welcome />*/
      <Signin /> 
     /* <ChoicePage1/> */}
    </div>
=======
      <BrowserRouter>
        <Routes>
            <Route  exact path= "/" element = {<Welcome nav= {()=> setWelcome(false)} />} />
            <Route  exact path= "/Register" element = {<Signin />} />
            <Route  exact path= "/Login" element = {<Login />} />
            <Route  exact path= "/Choices" element = {<ChoicePage1 />} />
            <Route  exact path= "/hi" element = {<HiAlex />} />
            <Route  exact path= "/states" element = {<Stats />} />
            <Route  exact path= "/achievements" element = {<Score />} />
            <Route  exact path= "/suggestions" element = {<Suggestions/>} />
        
        </Routes>
       {welcome && <Navbar/>}
      </BrowserRouter>
      
      {/* <ChoicePage1/> */}
      {/* <Stats />
      {/* <Score /> */}
      {/* <Suggestions/> */}
      
          </div>
>>>>>>> 929f99ee715773d26cea14f5f0ff7b64f841e0d8
  );
}

export default App;
