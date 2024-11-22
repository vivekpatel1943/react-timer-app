import React,{useRef, useState} from "react";
import './App.css'

function Display(){

    const [time,setTime] = useState(0);
    const intervalId = useRef(null); //persist intervalId across intervals
    
    
    function increaseTime(){
        setTime((prevTime) => prevTime + 1); //use functional state update
    }


    function changeTime(){

        if(!intervalId.current){  //prevent multiple intervals
            intervalId.current = setInterval(increaseTime,1000); //clear 
        }
       
    }

    function stopTime(){
        if(intervalId.current){
            clearInterval(intervalId.current);
            intervalId.current = null; //clear the intervalId reference 
        }
        
    }

    function resetTime(){
        stopTime(); //stop the timer when resetting
        setTime(0);
    }

    return (
    
        <div className="timer-display-container">
            <p id="time"><b>{time}</b></p>
            <div className='button-container'>
                <button className='start-button button' onClick={changeTime}>START</button>
                <button className='stop-button button' onClick={stopTime}>STOP</button>
                <button className='reset-button button' onClick={resetTime}>RESET</button>
            </div>
        </div>

    )

}

export default Display;