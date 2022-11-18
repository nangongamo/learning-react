import * as React from 'react'

function MySplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contacts() {
    return (
        <ul>
            <li>(01)123456789</li>
            <li>123321@123.com</li>
            <li>US US US US</li>
        </ul>
    );
}

function Chat() {
    return (
        <div className='chat'>
            hello, moximoxi ~
        </div>
    );
}

function SplitPane() {
    return (
        <MySplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}

export {SplitPane}