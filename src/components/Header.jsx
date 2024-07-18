import { useState } from "react";
import "../styles/Header.css";

export const Header = () => {

    const [showTime, setShowTime] = useState();
    
    setInterval(clockTiming, 1000);
    
    function clockTiming() {
        let d = new Date();
        let currTime = d.toLocaleTimeString();
        setShowTime(currTime);
    }

    return (
        <>
            <div className="container-fluid text-center py-3 header dosis">
                <div className="row text-center justify-content-between align-items-stretch">
                    <div className="col-6 text-start">
                        <h1 className='px-1 px-md-3'>Acoustic Notes</h1>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <h2 className="mx-md-3 mx-2 mt-2"> {showTime} </h2>
                        <i className="fa-solid fa-palette px-1 px-md-3"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
