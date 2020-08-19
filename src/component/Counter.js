import React, {useState, useEffect} from "react";
import randomcolor from "randomcolor";

function Counter() {
    const [count, setCount] = useState(0);
    const [answer, setAnswer] = useState("true");
    const [color, setColor] = useState("");
    const [timer, setTimer] = useState(0);
    
    function increment() {
        setCount(prevCount => prevCount + 1);
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    function changeAnswer() {
        setAnswer(prevAnswer => {return JSON.stringify(!JSON.parse(prevAnswer))} );
    }

    // useEffect(() => {
    //     setColor(randomcolor())
    // }, [count]); // only set a random color when the count variable changes

    useEffect(() => {
        setColor(randomcolor())
        const intervalID = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);
        // will clearInterval when the component unmounts
        return () => clearInterval(intervalID);
    }, []); // only set a random color when the component mounts for the first time, setInterval will only set up once
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1>Answer: {answer}</h1>
            <button onClick={changeAnswer}>Change Answer</button>
            <h1>Timer: {timer}</h1>
        </div>
    );
}

export default Counter