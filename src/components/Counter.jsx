import { useEffect, useState } from "react";
import "./Counter.css";

const Counter = (props)=>{
    const y = 5;
    const [value,setValue]=useState(y);
    const [input,setinput]=useState(0);

      

    // const Add = ()=>{
    //     setValue(value+1);
    // };

    // const Subtract = ()=>{
    //     setValue(value-1);
    // };

    const handleincrement = ()=>{
        setValue(value+Number(input));
    };
    const handledecrement = ()=>{
        setValue(value-Number(input));
    };
    const handleincrementfive = (param)=>{
        setValue(value+param);
    };
    const handledecrementfive = (param)=>{
        setValue(value-param);
    };
    const handleinput = (event)=>{
        setinput(event.target.value);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        console.log('Timeout finished');
      }, 10);
  
      return () => {
        clearTimeout(timer);
        console.log('Cleanup');
      };
    },[]);

    return(
      <div className="main">
        {/* <button onClick={Add}>+</button> */}
        {/* <h1>Value of x: {value}</h1> */}
        {/* <button onClick={Subtract}>-</button> */}
        <h1>Item name: {props.itemName}</h1>
        <h1 className={`${value > 0 ? "nonZeroHeading" : "zeroHeading"}`}>{value>0 ? value:"no item in card"}</h1>
        <input className="Cinput" type="text" placeholder="Enter a number" onChange={handleinput}></input> 
        <button className="increment Cbutton" onClick={handleincrement}>Increment</button>
        <button className="decrement Cbutton" onClick={handledecrement}>Decrement</button>
        <button className="increment Cbutton" onClick={()=>{handleincrementfive(5)}}>Increment by 5</button>
        <button className="decrement Cbutton" onClick={()=>{handledecrementfive(5)}}>Decrement by 5</button>
      </div>
    );
  };

export default Counter;