import { useState } from "react";
import './Counter.css';

interface CounterProps {
    title: string;
    initialValue: number;
    maxValue?: number;
}
function Counter({title, initialValue, maxValue}: CounterProps) {
    const [count,setCount] = useState(initialValue);

    const increment = () =>{
        setCount(count + 1);

        // if(count >= 10){
        //     alert("Count cannot be more than 10");
        //     setCount(10);
        // }
    }

    const decrement =() =>{
        setCount( count - 1);
    }

    const reset = (value:number) => {
        setCount(value);
    }

    return (
        <div>
            <h2>
                {title}: {count}
            </h2>
            <button className="counter-button reset" onClick={() => reset(initialValue)}>
                Reset
            </button>
            <button className="counter-button" onClick={increment}>
                ✚
            </button>
            <button className="counter-button" onClick={decrement}> 
                −
            </button>
        </div>
    )
}

export default Counter;