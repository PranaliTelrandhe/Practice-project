import { useState } from 'react';
import { Form,FormGroup,FormLabel,FormControl,Container,Button,FormText} from 'react-bootstrap'

const SignUpForm = ({existingUser})=>{
const [user,setUser] = useState({
    username:"",
    password:"",
    confirmPassword:""
})
//event handler to handle sign up form submit evemt
const submitForm =(e)=>{
    e.preventDefault();
    alert("congrats you have successfully registered")
}


return(
    <Container className='w-50 border border-dark rounded mt-3 p-3'>
        <h2 className='text-center'>Sign Up Form</h2>
<Form onSubmit={submitForm}>
    
<FormGroup className='mb-3'>
        <FormLabel>New username</FormLabel>
        <FormControl value={user.username} onChange={e=>setUser( {...user,username:e.target.value})} required />
        </FormGroup>
        <FormGroup className='mb-3'>
        <FormLabel>New password</FormLabel>
        <FormControl type='text' value={user.password} maxLength={10} onChange={e=>setUser({...user,password:e.target.value})} required 
        pattern='(?=.*[0-9])(?=.*[a-z]
        (?=.*[A-Z])(?=.*[@#$%]).{6,10} '/>
            <FormText>password must be 6 to 10 char long.It must contain one lowercase nd one uppercase nd 1 digit nd any 1 symbol such as @#$%</FormText>
    </FormGroup>
    <FormGroup className='mb-3'>
       <FormLabel>confirm new password</FormLabel> 
       <FormControl type='password' value={user.confirmPassword} onChange={e=>setUser({
        ...user,confirmPassword:e.target.value
       })} required/>
       {user.password !==user.confirmPassword && <p style={{color:'red'}}>sorry! password is not matched</p>}
    </FormGroup>
    <Container className='text-center'>
    <Button className='me-3' variant='success' type='submit'>sign up</Button>
    <Button variant='secondary' type='reset'>Reset</Button>
    </Container>
</Form>

        <p>Already user? Please <button className="btn btn-link" onClick={existingUser}>sign In</button></p>
    </Container>
)


}
export default SignUpForm;