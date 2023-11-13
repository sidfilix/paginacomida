import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from "./components/HeadlineCards";
import Categoryes from './components/Categorys';
import Food from './components/Food'

function App() {
  return (
    
    <div>
      <Navbar />
       <Hero/>
       <HeadlineCards/>
       <Categoryes/>
       <Food/>
    </div>
  
  );
}

export default App; 
