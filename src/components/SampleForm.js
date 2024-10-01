const SampleForm =()=>{

//event handler fun to handle form submit event
const handleSubmit = (e)=>{
    e.preventDefault();//to prevent deafault browser behaviour
    alert("form submit");
}

    //rendering form 
    return(
        <form onSubmit={handleSubmit}>
            <input/>
            <button type="submit">Submit</button>
        </form>
    );


}

export default SampleForm;