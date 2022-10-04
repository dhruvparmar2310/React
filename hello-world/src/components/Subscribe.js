import React, { Component } from "react";

//demo of class component
class Subscribe extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome to my Youtube Channel'
        }
    }

    changeMessage(){
        //calling setState() method, which accepts an object, which is nothing but new state of the component.
        this.setState({
            message: 'Thank you for Subscibing...'
        })
    }
    render(){
        //demo of state
        return(
            <>
                <span>Dhruv Parmar</span>
                <h3>{this.state.message}</h3>  
                <button onClick={ () => this.changeMessage() }>Subscribe</button>
            </>
        ) 
    }
}

export default Subscribe;