import { useState } from "react";
import Task from "./Task";

function Tasklist() {
    const [data,setData] = useState([]);
    const [submit,setSubmit] = useState("");

    const handleInput = (event)=>{
        setSubmit(event.target.value);
    }

    const handleSubmit = ()=>{
        if(submit==""){
            return alert("You can not add a blank task.")
        }
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
        <>
        <h1>TO DO LIST</h1>
        <div className="maincontainer">
            <div className="taskdesc">
                <span className="headingtaskdesc">Task Description</span>
                <input className="taskdescinput" type="text" value={submit} onChange={handleInput} placeholder="Enter you task here" />
                <button className="addtask" onClick={handleSubmit}>Add Task</button>
            </div>
            {data.map((tasklist, index) => {
            return <Task key={index} taskdesc={tasklist} taskno={index+1} onDelete={() => handleDelete(index)}/>;
      })}
        </div>
        </>
     );
};

export default Tasklist;