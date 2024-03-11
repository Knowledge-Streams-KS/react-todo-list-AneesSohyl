// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Counter from "./components/Counter";
import Task from "./components/Task";
import Tasklist from "./components/Tasklist";
import Livesearch from "./components/Livesearch";
import Basic from "./components/Basic";
const itemarr=["Shirts","Jeans","Hoodies","Shoes"]
const descarr=["Task should be done by 1 o'clock.","Task should be done by 2 o'clock.","Task should be done by 3 o'clock.","Task should be done by 4 o'clock."]

const App = ()=>{
  return(
    <div>
       <Counter />
      {/* <Task /> */}
{/*       
      <h1 className="mainheading">Category list</h1>
      {itemarr.map((clothingItem, index) => {
        return <Counter key={index} itemName={clothingItem} />;
      })}
      <h1 className="mainheading">Task list</h1>
      {descarr.map((tasklist, index) => {
        return <Task key={index} taskdesc={tasklist} />;
      })}
       */}
      
      {/* <Livesearch /> <Tasklist /> <Basic /> */}
      
    </div>
  );
};


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;
