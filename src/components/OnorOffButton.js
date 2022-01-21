import React, { useState } from "react";
import './Bulb.css'
const OnorOffButton=(props)=>{
const [caption,setCaption]=useState('On')

const toggleMe=()=>{
    if(caption==='On')
    setCaption('Off') 
    else{
        setCaption('On')
    }
}

const setParentData=()=>{
    toggleMe()
    if(caption==='On'){
        props.setParentData('yellowbulb')
    }

    else{
        props.setParentData('greybulb')
    }
    
}
    return(
        <>
        
        <button  onClick={setParentData}>{caption}</button>
        </>
    )
}

export default OnorOffButton
