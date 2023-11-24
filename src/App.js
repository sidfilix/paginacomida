import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from "./components/HeadlineCards";
import Categoryes from './components/Categorys';
import Food from './components/Food'
import Aboutus from './components/aboutus'
import Navigation from './components/pruebas'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 


function App() {
  return (
    
    <div>
      <Navigation/>
      <Aboutus/>
      <Navbar />
      <Hero/>
      <HeadlineCards/>
      <Categoryes/>
      <Food/>
      <Router>
      <Switch>
       <Route path ='./components' element={<Aboutus/>}/>  
       </Switch>
       </Router>
    </div>
  
  );
}

export default App; 
