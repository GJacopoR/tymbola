import Number from "../number";

interface CardStructure {
    structure: number[][];
}

function Card ({structure}:CardStructure) {
    console.log(structure)
    return <>
    {structure.map((el:number[]) => <div>{el.map((el:number)=><span>{el? <Number/> : 0}</span>)}</div>)}
    </>
}

export default Card;