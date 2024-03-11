import { useState } from "react";


const Basic = ()=>{

    const [count,setCount]=useState(0);

    const handleIncrement = ()=>{
        setCount((counts)=>counts+1);  // 0+1
        setCount((counts)=>counts+1);  // 1+1
        setCount((counts)=>counts+1);  // 2+1
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        return count;
    }


    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Basic;