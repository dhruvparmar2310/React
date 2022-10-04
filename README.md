# React from the Scratch

- I have started learning React from the scratch from freeCodeCamp.org Youtube channel.
- React Course - Beginner's Tutorial for React JavaScript Library [2022] | freeCodeCamp.org
- I also prefer this channel as well [Codevolution
](https://youtu.be/QFaFIcGhPoM)


## Why to learn React?

- It was created and maintained by Facebook.
- Easy to reuse the code.
- React is declarative (it tells you what you want and build the actual UI).

## How to create react app?

- There are two methods to create react app :
### 1. npx method :
---

- Open the terminal after installing node
- Type the below syntax:
```
npx create-react-app <your-project-name>
```
- after creating react app folder, run the below syntax to start the server
```
npm start
```
- Now try to change the content in src/App.js

### 2. npm method :
---

```
npm install create-react-app -g
create-react-app <project-name>
```

## Folder Structuring :

- "node_modules" : it contains all the dependency installed.
- "public" : it contains three files 
    - favicon.ico
    - index.html (contains div with id="root")
    - manifest.json
- "src" : index.js (we speacify the root components which is named as <App /> component and DOM element contain 'root' id which will be controlled by React.)
- When we run "npm start" command in terminal, the browser will serve index.html present in "public" folder.

## Types of Component:

- Stateless function
- Stateful class (it contains render method which returns HTML.)

## Difference of Functional and Class Component :

1. Functional Component :

    - It is simple function.
    - use functional component as much as possible.
    - the main advantage to use functional component is "Absence of 'this' keyword".
    - It is mainly responsible for UI.
    - It is Stateless Component.

2. Class Component :

    - More feature rich.
    - It maintain their own private data.
    - It has complex UI logics
    - It provides lifecycle hooks.
    - It is Stateful Class.
   
## What is Hooks?

Hooks are the new feature proposal which lets you use states and other react features without writing a class.

## What is JSX?

Javascript XML (JSX) - it is the extension to Javascript language syntax. JSX tags as a tag name, attributes and children. It is not necessary to write React Application but JSX makes your code simpler and elegant. 

There are some rules about JSX :

   - class -> className
   - for -> htmlFor
   - camelCase property naming convension :
        - onclick -> onClick
        - tabindex -> tabIndex

## What is Props?

`props` stands for properties. `props` are the arguments passed into React components.

eg: if I wanna print list of Employee

- Dhruv
- Sina
- Clark
    
Here `props` plays an important role. Make a component in src folder and create one .js file and write the below code.

```
import React from 'react'

const Employee = props => {
    //console.log(props);
    //return <h1>Hello, Dhruv</h1>
    return <h1>Hello, {props.name}, and your age is {props.age}</h1>
}

export default Employee
```

Now write the below code in "App.js" after importing "Employee.js" file in "App.js"
```
function App() {
  return (
    <div className="App">
      {/* Demo of props */}
      {/*<Employee />
      <Employee />
      <Employee /> */}
      
      <Employee name="Dhruv" age='21' />
      <Employee name="Sina" age='34' />
      <Employee name="Clark" age='15' />
    </div>
  );
}
```

It will return only one element. If I wanna print the child element of first Employee then add this content in .js file which you have created...
```
const Employee = props => {
    return (
        <div>
            <h1>Hello, {props.name}, and your age is {props.age}</h1>
            {props.children}
        </div>
    )
}
```
also add this content in App.js file
```
<Employee name="Dhruv" age='21'>
    <p> You are from India.</p>
</Employee>
```

## What is State?

React component as a built-in `state` object. The `state` object is where you store property values that belongs to the component. When the `state` object changes, the component re-renders. `state` is managed within the components. `state` can be changed but `props` cannot be changed because `props` is immutable.

Create one class constructor, add the below code in class component.
```
constructor(){
    super()
    //create a state empty object
    this.state = {
        //code
    }
}
```
