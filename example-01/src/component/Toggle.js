import * as React from 'react';
import './../css/component.css'

function Form() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className='btn-demo' type="submit">Submit</button>
        </form>
    );
}


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button className='btn-demo' onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export { Form, Toggle };