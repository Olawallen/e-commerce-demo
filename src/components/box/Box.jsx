import React from 'react'
import { BsCartPlus,BsFillStarFill } from "react-icons/bs";
import './box.css'


const Box = (props) => {
    
    const Addtocart = () => {
        console.log("item added to cart");
    }
  return (
    <div className='box'>
        <img src={props.img} alt="" className="boximage" />
        <h3 className="boxitem">{props.title}</h3>
        <p className="boxprice">${props.price}</p>
        <div className="boxratings">
        <BsFillStarFill/>
        <BsFillStarFill/>
        <BsFillStarFill/>
        <BsFillStarFill/>
        <BsFillStarFill/>
        </div>
        <button onClick={Addtocart}>
            <span>Add to Cart</span>
            <BsCartPlus/>
        </button>
    </div>
  )
}

export default Box