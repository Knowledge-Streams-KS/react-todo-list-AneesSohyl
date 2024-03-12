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
        <div>
            <h2 className={`${status ? "done" : "pending"}`}></h2>
            <p className={`${status ? "done" : "pending"}`}><span className="taskno">Task # {props.taskno}: </span>{props.taskdesc} <input className="lrmargin" type="checkbox" onChange={handleChange}></input><span>{defstatus}</span>
            <button className="deletebtn lrmargin" onClick={props.onDelete}>Delete</button></p>
        </div>
    );//
}

export default Task;