// import React, { useState } from "react";

// function CounterButtons() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   return (
//     <div className="flex flex-col items-center gap-4 mt-10">
//       <h1 className="text-2xl font-bold">Button Click Counter {count1} </h1>

//       <button
//         onClick={() => setCount1(count1 -1 )}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Button 1 Clicked: {count1} times
//       </button>


//       <button
//       onClick={() => setCount1(count1+1)}
//       className= "bg-emerald-500 text-white px-4 py-2 rounded hover:bg-slate-800">
//         Button Clicked: {count1} times
//       </button>

//       <button
//         onClick={() => setCount2(count2 + 1)}
//         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//       >
//         Button 1 Clicked: {count2} times
//       </button>

//       <button
//       onClick={() => setCount2(count2+1)}
//       className= "bg-emerald-500 text-white px-4 py-2 rounded hover:bg-slate-800">
//         Button Clicked: {count2} times
//       </button>
//     </div>
//   );
// }

// export default CounterButtons;



import React from 'react'
import UseEffectHooks from './Component/UseEffectHooks'

function App() {
  return (
    <UseEffectHooks/>
  )
}

export default App