import  "./resultComponent.css";
const ResultComponent=({name})=>{
    return (
            <div className="name"
             onClick={(e)=>alert(`you clicked on ${name}`)}>
                {name}</div>
    )
}
export default ResultComponent;