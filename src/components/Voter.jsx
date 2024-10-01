const Voter = ({citizen})=>{
/*if(citizen.age>=18){
    return <h2 style={{color:"green"}}>congrats {citizen.age}! you are eligible for voting</h2>
}
else{
   // return <h2 style={{color:"red"}}>sorry {citizen.age}! you are not eligible for voting</h2>
   return null;//conditionally return nothing   
*/
/*return (
    citizen.age>=18? <h1 style={{color:"pink"}}>hey {citizen.name}, eligible for voting </h1> :
    <h1 style={{color:"red"}}> oh! {citizen.name} ,you missed</h1>
)*/
return citizen.age>=18 && <h3 style={{color:"blue"}}> Great! {citizen.name}
Congrats.. Eligible for voting</h3>
}
export default Voter;