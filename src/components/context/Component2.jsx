import Component3 from "./Component3"

const Component2 =({c2msg})=>{
return(
    <div className="border border-3 border-danger rounded m-3 p-3">
        <h2>Component2</h2>
      {/*  <Component3 c3msg={c2msg}/>*/}
      <Component3/>
    </div>
)


}
export default Component2;


