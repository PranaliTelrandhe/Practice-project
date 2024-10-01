import {useState} from "react";
import ProfileDetails from "./ProfileDetails";


const ProfileForm = ()=>
{
    const [profile,setProfile]=useState({
        fullName:'',
        age:'',
        gender:'',
        hobbies:[],
        phoneNo:'',
        emailId:'',
        qualification:''
    })
//variable usestate
    const [isSubmitted,setIsSubmitted] = useState(false)

//event handler to handle form submit event
const handleSubmit = e=> {
    e.preventDefault();
    alert("profile form submittted")
    setIsSubmitted(true)
}

//event handler to handle  checkbox event
const handleHobbies =(e)=>{
const {value,checked} = e.target;
if(checked)
    setProfile({...profile,hobbies:[...profile.hobbies,value]})
else
setProfile({...profile,hobbies:profile.hobbies.filter(val=>val!=value)})

}

return(<>
    {!isSubmitted && <div className="container border border-dark rounded p-3 mt-3 w-50 text-bg-dark">
    
    <h2 className="text-center">Profile Form</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <input className="form-control" type="text" placeholder="FULL NAME" value={profile.fullName}
            onChange={e=>setProfile({...profile,fullName:e.target.value})} required/>
        </div>

<div className="mb-3">
    <input className="form-control" type="number" placeholder="AGE IN COMPLETE YEARS" value={profile.age}
    onChange={e=>setProfile({...profile,age:e.target.value})} required min={18} max={60}/>
</div>

<div className="mb-3">
<label>SELECT GENDER:</label>
<div className="form-check">
    <input className="form-check-input" type="radio" name="gender" id="g1" value="Male" checked={profile.gender=="Male"} required
    onChange={e=>setProfile({...profile,gender:e.target.value})}/>
    <label className="form-check-label" htmlFor="g1" >Male</label>
</div>
<div className="form-check">
    <input className="form-check-input" type="radio" name="gender" id="g2" value="Female" checked={profile.gender=="Female"}
    onChange={e=>setProfile({...profile,gender:e.target.value})}/>
    <label className="form-check-label" htmlFor="g2" >Female</label>
</div>

<div className="mb-3">
    <label className="form-label me-3">SELECT HOBBIES :</label>
    <input className="form-check-input me-1" type="checkbox" name="hobbies" id="h1" value="singing" onChange={handleHobbies} checked={profile.hobbies.includes("singing")}/>
    <label className="form-check-label me-2" htmlFor="h1">Singing</label>



    
    <input className="form-check-input me-1" type="checkbox" name="hobbies" id="h2" value="dancing" onChange={handleHobbies} checked={profile.hobbies.includes("dancing")}/>
    <label className="form-check-label me-2" htmlFor="h2">Dancing</label>


    
    <input className="form-check-input me-1" type="checkbox" name="hobbies" id="h3" value="drawing" onChange={handleHobbies} checked={profile.hobbies.includes("drawing")}/>
    <label className="form-check-label me-2" htmlFor="h3">Drawing</label>
</div>
<div className="mb-3">
    <input className="form-control" type="tel" placeholder="Mobile number" value={profile.phoneNo}
    onChange={e=>setProfile({...profile,phoneNo:e.target.value})}
    pattern="[0-9]{10}" maxLength={10} required/>

</div>
<div className="mb-3">
    <input className="form-control" type="email" placeholder="EMAIL ADDRESS"
    value={profile.emailId}
    onChange={e=>setProfile({...profile,emailId:e.target.value})} required/>


</div>
<div className="mb-3">
<label className="form-label" htmlFor="qu">EDUCATION QUALIFICATION </label>
<select className="form-select" id="qu" 
value={profile.qualification}
onChange={e=>setProfile({...profile,qualification:e.target.value})}>
<option>B.sc</option>
<option>B.com</option>
<option>B.E</option>
<option>M.sc</option>
<option>M.com</option>
<option>
    M.c.a
</option>
<option>M.E</option>

</select>

</div>


</div>


        <div className="text-center">
            <button className="btn btn-outline-light me-2" type="submit">Submit</button>
            <button className="btn btn-outline-light" type="reset"
            onClick={()=>setProfile({
                fullName:'',
                age:'',
                gender:'',
                hobbies:[],
                phoneNo:'',
                emailId:'',
                qualification:''   
            })}>Reset</button>
        </div>
    </form>
</div>}
{ isSubmitted && <ProfileDetails profile={profile} submitted={setIsSubmitted}/>
   }

</>



)
}
export default ProfileForm;