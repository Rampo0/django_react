import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div>
                <h1>React App Home</h1>
                <Link to={"/product"}>
                        Go to product page
                </Link>
            </div>
            
        );
    }
}