import { useState } from "react";

function App() {
    // 1. Case 1: When the value is not going to change, use const
    // const [appTitle, setAppTitle] = useState("React App - useState Demo");
    const appTitle = "React App - useState Demo";

    // 2. Case 2: Derived State
    // Suppose we have a count state, and we want to show the double of the count as a derived value
    const [count, setCount] = useState(0);
    // const [doubledCount, setDoubledCount] = useState(count * 2);
    const doubledCount = count * 2;

    const handleClick = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>{appTitle}</h1>

                <div>
                    <p>Current Count: {count}</p>
                    <p>Doubled Count (Derived): {doubledCount}</p>
                    <button onClick={handleClick}>Increment Count</button>
                </div>
            </header>
        </div>
    );
}

export default App;
