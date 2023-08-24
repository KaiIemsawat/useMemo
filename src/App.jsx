import React, { useState, useMemo } from "react";

/* useMemo Pros/Cons */
// PROS - Less memory for calculation process
// CONS - Need more memory to store information

export default function App() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    /*
    Use these line may not chage the speed of doubleNumber
    but themeStyle will skip doubleNumber and run very fast 
     */
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    /* Using this below code will cause both doubeNumber and themeStyles run slowly */
    // const doubleNumber = slowFunction(number);

    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    function slowFunction(num) {
        console.log("calling slow function");
        for (let i = 0; i < 1000000000; i++) {}
        return num * 2;
    }

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Change Theme
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    );
}
