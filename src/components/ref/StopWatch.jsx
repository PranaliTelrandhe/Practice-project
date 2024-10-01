import { useRef, useState } from "react";

const StopWatch =()=>{
const [startTime,setStartTime]=useState(null)
const [currentTime,setCurrentTime]=useState(null)

const timeIntervalRef = useRef(null)

//event
const handleStart =()=>{
    setStartTime(Date.now())
    setCurrentTime(Date.now())
   
//global object setInterval()
//ref isc used to store interval timeout Id
timeIntervalRef.current= setInterval(()=>{
    setCurrentTime(Date.now())
},10)

}
const handleStop =()=>{
    clearInterval(timeIntervalRef.current)



}

let minutes=0,seconds=0;
if(startTime!=null && currentTime!=null){
    const durationInMilliseconds= currentTime -startTime
    seconds=(durationInMilliseconds /1000)%60
    minutes=   Math.floor(durationInMilliseconds/(1000*60))
}

seconds = seconds<10? '0'+ seconds.toFixed(2): seconds.toFixed(2)
minutes =minutes<10? '0'+ minutes:minutes

return(

<div>
    <h2>{minutes}:{seconds}</h2>

    <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
    </div>
</div>

)





}
export default StopWatch;