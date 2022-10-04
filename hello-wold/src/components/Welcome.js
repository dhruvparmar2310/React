import React, { Component } from "react";

//demo of class component
class Welcome extends Component{
    render(){
        //return <h3>Welcome to React Learning Journey...</h3>

        //demo of this keyword using props
        return <h3>Welcome to React Learning Journey, {this.props.name}</h3>
    }
}

export default Welcome;