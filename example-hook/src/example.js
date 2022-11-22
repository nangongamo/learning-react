import React, { useEffect, useRef, useState } from 'react';

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

function TextInputWithFocusButton(){
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export { Example,TextInputWithFocusButton}