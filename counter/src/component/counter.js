import React, { Component } from "react";

//demo of class component
class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    clickEvent(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.clickEvent()}>Click Me!</button>
                <h3>Button Clicked : {this.state.count}</h3>
            </div>
        )
    }
}

export default Counter;