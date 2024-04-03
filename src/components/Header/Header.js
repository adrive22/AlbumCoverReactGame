import React from "react";
import "./Header.css";

const Header = props =>(
    <div class="header">
    <div className="title">{props.children}</div>
    
    <div clasName="scores">
    <div className="score badge badge-secondary badge-info">Click Count: {props.score}</div>
    <div className="highscore badge badge-info">High Score:{props.highscore}</div>
    </div>
    </div>
    
);

export default Header;

