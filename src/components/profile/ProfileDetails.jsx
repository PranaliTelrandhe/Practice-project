const ProfileDetails =({profile,submitted})=>{
return(
<div className="container text-bg-primary p-3 mt-3 rounded w-75">
    <h2 className="text-center">Profile Details</h2>
<h3>FULL NAME:  {profile.fullName}</h3>
<h3>AGE:  {profile.age}</h3>
<h3>GENDER:  {profile.gender}</h3>
<h3>HOBBIESS: </h3>
<ul>
    {profile.hobbies.map(hobby=><li key={hobby}>{hobby}</li>)}
</ul>
<h3>Mobile No:   {profile.phoneNo}</h3>
<h3> EMAIL: {profile.emailId}</h3>
<h3>QUALIFICATION:   {profile.qualification}</h3>
<button className="btn btn-outline-light" onClick={()=>submitted(false)}>Edit</button>
</div>

)

}

export default ProfileDetails;