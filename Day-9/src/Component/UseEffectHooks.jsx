import React, {useState,useEffect} from 'react'

function UseEffectHooks() {
 


    const [count, setCount] = useState (0);
    
    useEffect(()=> {
        console.log("Hello, My name is Yuvraj Pandey.");
    },[count])
    
    useEffect (()=> {
        console.log ("with no depedency");
    },[]);

    useEffect (()=> {
        console.log ("Dependency of value");
    },[count]);


    return(
            <>
                <div>

                    <h1>UseEffectHooks</h1>
                    <h2> Count is: {count}</h2>
                    <button onClick={() => { setCount(prev => prev+1)}}> Increment</button>
                </div>
            
            
            
            
            </>







    )

  
}

export default UseEffectHooks