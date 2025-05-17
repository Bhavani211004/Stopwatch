
import React,{useState,useEffect,useRef} from 'react';
function Stopwatch(){

    const[isRuning,setIsRunning] =useState(false);
    const[elaspedTime,setElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(0);
    useEffect(()=>{
        if(isRuning){
            intervalIdRef.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current);
            },10);
        }
        return()=>{
            clearInterval(intervalIdRef.current);
        }

    },[isRuning])
    function start(){

        setIsRunning(true);
        startTimeRef.current=Date.now()-elaspedTime;

    }
    function stop(){
        setIsRunning(false);

    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);

    }
    function formatTime(){
        let hours= Math.floor(elaspedTime/(1000*60*60));
        let minutes=Math.floor(elaspedTime/(1000*60)%60);
        let seconds=Math.floor(elaspedTime/(1000)%60);
        let milliseconds=Math.floor((elaspedTime %1000 )/10);
        
        return `${minutes}:${seconds}:${milliseconds}`

    }
return(
    <div className='Stopwatch'>
         <div className='display'>{formatTime()}</div>
         <div className='controls'>
            <button onClick={start} className='start'>Start</button>
            <button onClick={stop} className='stop'>Stop</button>
            <button onClick={reset} className='reset'>Reset</button>



         </div>
    </div>
       
    
);
}

export default Stopwatch