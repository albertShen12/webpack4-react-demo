import React from "react";
import {Button, message} from 'antd';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import Login from './views/Login';
import Home from './views/Home';

const App = () => {

    let handleClick = () => {
        message.info('hello world');
    };

    return (
        <Router>
            <div className="left-side">
                <p>hello world!</p>
                <Button type="primary" onClick={() => handleClick()}>Click me</Button>
                <div>
                    <Link to="/login">login</Link>
                </div>
                <div>
                    <Link to="/home">home</Link>
                </div>
            </div>
            <div className="content-body">
                <Switch>
                    <Route path="/login/" component={Login}/>
                    <Route path="/home/" component={Home}/>
                </Switch>
            </div>

        </Router>
    );
};
export default App;