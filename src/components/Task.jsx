import { useState } from "react";
import "./Task.css";

const Task = (props) => {
    const [defstatus, setDefstatus] = useState("Pending");
    const [status, setStatus] = useState(false);
    
    const handleInputData = () => {
        setDefstatus(() => (status ? "Pending" : "Done"));
    };
    
    const handleInput = (event) => {
        setStatus(event.target.checked);
    };

    const handleChange = (event) => {
        handleInput(event);
        handleInputData();
    };

    return (
        <div className="container">
            <h1 className={`${status ? "done" : "pending"}`}>{defstatus}</h1>
            <p>{props.taskdesc} <input type="checkbox" onChange={handleChange}></input>
            <button onClick={props.onDelete}>Delete</button></p>
        </div>
    );
}

export default Task;