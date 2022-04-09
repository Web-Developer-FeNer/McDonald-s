import React from "react";
import { useSelector } from "react-redux";


function Button() {

  const { totalPrice} = useSelector(({cart}) => ({
    totalPrice: cart.totalPrice,
   
  }))

    return (
        <div className="header_cart">
            <a href="" className="button">
              <span> {totalPrice} руб.</span>
              
              <img src="/image 2.png" alt="" />
            </a>
          </div>
    )
}

export default Button