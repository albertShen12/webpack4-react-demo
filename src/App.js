import React from "react";
import {Button,message} from 'antd';

const App = () => {

    let handleClick=()=>{
        message.info('hello world');
    };

    return (
        <div>
            <p>hello world!</p>
            <Button type="primary" onClick={handleClick}>Click me</Button>
        </div>
    );
};
export default App;