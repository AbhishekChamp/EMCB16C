import { useState } from "react";

const Counter = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);

    return (
        <div className='counter'>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;
