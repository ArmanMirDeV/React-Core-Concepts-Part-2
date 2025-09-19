import { useState } from "react";

export default function Bowler() {

    const [balls , setBalls] = useState(0);
    

    const handleBalls = () => {
        const updateBalls  = balls + 1;
        setBalls(updateBalls)
    }



    return (
        <div>
            <h3>Bowler: Balls Counter</h3>
            <h2>Balls: {balls} </h2>
            <button onClick={handleBalls} >Ball: {balls} </button>
            <button  >No Balls: </button>
            <button>Wides: </button>

        </div>
    )
}