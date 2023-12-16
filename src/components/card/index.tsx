import CardComponent from './card';

function Card() {

    const cardStructure:number[][] = Array.from({ length: 3 }, () => Array(9).fill(null))

    console.log(cardStructure)

    return <CardComponent structure={cardStructure}/>
}

export default Card;