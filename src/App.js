import React from "react";

import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import {Header} from "./components";
import Cart from "./pages/Cart";
import Home from "./pages/Home";




function App () {
  
  
      
  


  return(
    <div className="Wrapper">

      <Header />
      

      

      <div className="content">
        
        <Routes>

        <Route path='/' element={<Home />} exact/>

        <Route path='/cart' element={<Cart />} exact />

      </Routes>
        
      </div>



    </div>
  )
}

export default App;















 