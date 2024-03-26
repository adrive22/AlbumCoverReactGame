//this is the componenet/method that will loop through the cards from cardImages.json file and seperate them out into 
//individual objects

import React from "react";
import cardsImages from "./cardImages.json";
import Card from "./card";

const Cards = (props) => {
    return cardsImages.map( item => <Card cardData={ item } clickCount={ props.clickCount }/> )
};

export default Cards;