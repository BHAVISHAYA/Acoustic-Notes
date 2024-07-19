import { useState } from "react";
import "../styles/Header.css";

export const Header = () => {

    const [showTime, setShowTime] = useState();
    const [num, setNum] = useState(2);
    
    setInterval(clockTiming, 1000);
    
    function clockTiming() {
        let d = new Date();
        let currTime = d.toLocaleTimeString();
        setShowTime(currTime);
    }

    const changeColor = () => {
        if(num <= 4)
        setNum(num + 1);
        else if(num == 5) 
        setNum(1);
        if(num == 1) {
            document.documentElement.style.setProperty('--color_1', '#FBE8A6');
            document.documentElement.style.setProperty('--color_2', '#F4976C');
            document.documentElement.style.setProperty('--color_3', '#303C6C');
            document.documentElement.style.setProperty('--color_4', '#B4DFE5');
            document.documentElement.style.setProperty('--color_5', '#D2FDFF');
            document.documentElement.style.setProperty('--blur-background', 'rgb(255, 228, 196, 0.9)');
        }
        else if(num === 2) {
            document.documentElement.style.setProperty('--color_1', '#874F41');
            document.documentElement.style.setProperty('--color_2', '#244855');
            document.documentElement.style.setProperty('--color_3', '#FBE9D0');
            document.documentElement.style.setProperty('--color_4', '#244855');
            document.documentElement.style.setProperty('--color_5', '#E64833');
            document.documentElement.style.setProperty('--blur-background', 'rgb(135, 79, 65, 0.9)');
        }
        else if(num === 3) {
            document.documentElement.style.setProperty('--color_1', '#3D52A0');
            document.documentElement.style.setProperty('--color_2', '#7091E6');
            document.documentElement.style.setProperty('--color_3', '#130c0c');
            document.documentElement.style.setProperty('--color_4', '#ADBBDA');
            document.documentElement.style.setProperty('--color_5', '#EDE8F5');
            document.documentElement.style.setProperty('--blur-background', 'rgb(61, 82, 160, 0.9)');
        }
        else if(num === 4) {
            document.documentElement.style.setProperty('--color_1', '#E3AFBC');
            document.documentElement.style.setProperty('--color_2', '#5D001E');
            document.documentElement.style.setProperty('--color_3', 'white');
            document.documentElement.style.setProperty('--color_4', '#9A1750');
            document.documentElement.style.setProperty('--color_5', '#9A1750');
            document.documentElement.style.setProperty('--blur-background', 'rgb(11, 12, 16, 0.9)');
        }
        else {
            document.documentElement.style.setProperty('--color_1', '#802BB1');
            document.documentElement.style.setProperty('--color_2', '#2D283E');
            document.documentElement.style.setProperty('--color_3', '#D1D7E0');
            document.documentElement.style.setProperty('--color_4', '#4C495D');
            document.documentElement.style.setProperty('--color_5', '#564F6F');
            document.documentElement.style.setProperty('--blur-background', 'rgb(128, 43, 177, 0.9)');
        }
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
                        <i className="fa-solid fa-palette px-1 px-md-3" onClick={changeColor}></i>
                    </div>
                </div>
            </div>
        </>
    )
}
