/*export default function Person(props){
    return <h2> Dear {props.name} ,you are {props.gender} of {props.age} year old</h2>
}*/

export default function Person({name,gender,age}){

    return <h2>Hello {name}, your age is {age} years and you are {gender}</h2>
}