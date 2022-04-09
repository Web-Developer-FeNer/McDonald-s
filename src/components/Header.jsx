import React from "react"
import { Link } from "react-router-dom"
import {Button} from "./index.js"


function Header() {

    return (
      
    <div className="header">
      
        <div className="container">
        
          <div className="header_logo">
          <Link to='/'>
            <img src="/image 1.png" alt="McDonald's" />
            </Link>
            <div>
            <h1>McDonald's</h1>
            </div>
            
           
          </div>
          
          <Link to='/cart'>
          <Button />
          </Link>
        </div>
      </div>
    )
}


export default Header