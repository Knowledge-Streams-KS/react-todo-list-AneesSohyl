import { useState } from "react";
import Task from "./Task";

function Tasklist() {
    const [data,setData] = useState([]);
    const [submit,setSubmit] = useState("");

    const handleInput = (event)=>{
        setSubmit(event.target.value);
    }

    const handleSubmit = ()=>{
        setData([...data,submit]);
        setSubmit("");
    }

    const handleDelete = (index) => {
        // data.splice(index,1);
        // setData([...data]);
        const updatedData = [...data.slice(0, index), ...data.slice(index + 1)];
        setData(updatedData);
    };

    return (
        <div>
            <input type="text" value={submit} onChange={handleInput} />
            <button onClick={handleSubmit}>Submit</button>
            {data.map((tasklist, index) => {
            return <Task key={index} taskdesc={tasklist} onDelete={() => handleDelete(index)}/>;
      })}
        </div>
     );
};

export default Tasklist;