import React , {Component} from 'react';
import Router from './core/Router';

export default class App extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Router></Router>
            // <h1>asdasd</h1>
        );
    }
}