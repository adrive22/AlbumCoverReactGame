//this component/method will draw the data from the looped images in cards.js file to input into the html

import React from "react";
import cards from "./cards.css";

const Card = props => {
    //console.log(props)
   return(
    

       <div className="ultimateContainer">
       <div className="actualCard" onClick={() => props.clickCount(props.cardData.id)}>
        <div className="cardsContainer">
            <img className="cardImages" alt="placeholder" src={require(`../../images/${props.cardData.image}`)}/>
        </div>  
        </div>            
        </div> 
    
   )
}

export default Card;