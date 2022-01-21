import React, { useState } from "react";
import Bulb from "./components/Bulb";
import OnorOffButton from "./components/OnorOffButton";
import './App.css'
const App = () => {
    const [bulbColor, setBulbColor] = useState('')
    const getDataFromChild = (colorfromchild) => {

        setBulbColor(colorfromchild)
    }
    return (
        <>
            <div className="row appdiv">
                <div className="col-md-6">
                    {/* <div className="appdiv"> */}
                        <Bulb colorclass={bulbColor} />
                    {/* </div> */}
                </div>
                <div className="col-md-6">
                    {/* <div className="appdiv"> */}
                        <Bulb colorclass={bulbColor} />
                    {/* </div> */}
                </div>
            </div>


        </>
    )
}

export default App
