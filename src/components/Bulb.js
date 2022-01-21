import React, { useState } from "react";
import './Bulb.css'
import OnorOffButton from "./OnorOffButton";
const Bulb=(props)=>{
const [yellow,setYellow]=useState('yellowbulb')
const colorChange=(myval)=>{
    setYellow(myval)
}


    return(

        <>
       
        <div className={yellow}></div>
        <OnorOffButton setParentData={colorChange}/>
        
        </>
    )
}

export default Bulb
