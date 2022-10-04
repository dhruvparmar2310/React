import React from 'react'

//demo of props
/*
if I want to print :
Dhruv 
Sina
Clark

then props comes to picture
-----------------------------
without using props we will get
Dhruv
Dhruv
Dhruv
*/

const Employee = props => {
    //console.log(props);
    //return <h1>Hello, Dhruv</h1>
    return (
        <div>
            <h1>Hello, {props.name}, and your age is {props.age}</h1>
            {props.children}
        </div>
    )
}

export default Employee