import { useState } from "react";


const Livesearch = ()=>{
    const data = ["Apple","Orange","Mango","Banana","Strawberry","Guava","Pomigranade"]
    const [find,setFind]=useState(data);

    const handleSearch = (event)=>{
        const newData = data.filter((asadL)=>{
            return asadL.toLowerCase().includes(event.target.value.toLowerCase());
        })

        setFind(newData);
    }

    return(
        <div>
            <input type="text" onChange={handleSearch}/>
            <ul>
                {find.map((asadL,index)=>{
                    return <li key={index}>{asadL}</li>
                })}
            </ul>

        </div>
    )
}

export default Livesearch;