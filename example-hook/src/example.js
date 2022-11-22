import React, { useEffect, useState } from 'react';

function Example() {

    const [count, setCount] = useState(0);

    // 相当于 componentDidMount 和 componentDidUpdate
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>Your clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>
                Click Me
            </button>
        </div>
    );
}

export { Example }