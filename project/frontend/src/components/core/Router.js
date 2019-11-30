import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from '../views/Home';
import Product from '../views/Product';

export default class MyRouter extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
        
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product" component={Product}/>
                </Switch>
            </BrowserRouter>
        
        );
    }
}