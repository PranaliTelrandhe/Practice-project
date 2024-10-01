import { useState } from "react";

const LoginForm = ({newUser})=>{
const [user,setUser]= useState({
    username:"",
    password:""

})
//event handler to handle username change event
const handleUsernameChange = (e)=>{
setUser({...user,username:e.target.value})

}
//event handler to handle password change event
const handlePasswordChange = e=>{
    setUser({...user,password:e.target.value})
    
    }
    //event handler to handle submit change event
const handleSubmit= (e)=>{
    e.preventDefault();
    alert("login form is submitted");
}
return(
    <div className="container border border-dark p-3 mt-3 rounded w-50">
         <h2 className='text-center'>Login Form</h2>
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label className="form-label" for="un">Username :</label>
                <input className="form-control" id="un" type="text" placeholder="ENTER USER NAME" value={user.username} 
                onChange={handleUsernameChange} required/>

            </div>
            <div className="mb-3">
            <label className="form-label" htmlFor="pw">Password :</label>
            <input className="form-control" id="pw" type="password" placeholder="ENTER PASSWORD" value={user.password} 
            onChange={handlePasswordChange} required/>
            </div>
            <div className="text-center">
                <button className="btn btn-success" type="submit" >Login</button>
            </div>
        </form>
    {/*    <h2>username: {user.username}</h2>
        <h2>password: {user.password} </h2>*/}
        <h2>new user? please <button className="btn btn-link" onClick={newUser}>sign up</button></h2>
    </div>
)

}
export default LoginForm;