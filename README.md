> Learn React with me and Buy a coffee for me | [@dhruvparmar2310](https://github.com/dhruvparmar2310)

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

## Package.json

It is an config file of React. It contains keywords, license, author, version, name, dependencies and many more.
Also refer the official documentation of [Package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

To create `package.json` file run the below command.
```
npm init
```
to modify the version, name or author anything. run the below command as shown in example.
```
npm config set init.author Dhruv Parmar
npm config set init.license MIT
rm package.json
npm init --y
```
Here `rm package.json` is used to remove old file.

## How to start the server:
- When we run `npm start` command in terminal, the browser will serve index.html present in "public" folder.
```
npm start
```

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

Hooks are the new feature proposal which lets you use states and other react features without writing a class. React Hooks are a function type that allows you to hook into React state and lifecycle features. Previously, If you write a function component and notice that you need to apply some state to it all you have to do is, change that functional component into a class. But with the new update, you can just use a Hook inside the function component, making the refactoring procedure easy.

Also Refer : 

- [Types of Hooks in React Js](https://enlear.academy/types-of-react-hooks-best-practices-45c275b55b1f) 
- [useForm](https://react-hook-form.com/) | Type of Hook

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

```javascript
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
```javascript
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

Rules for `setState()` method:
- Always use the `setState()` method, never try to modify the `state` directly.
- Sometimes code has to be updated after the state has been updated? So place that code in the callback function which is nothing but the second parameter of `setState()` method.  

Create one class constructor, add the below code in class component.
```javascript
constructor(){
    super()
    //create a state empty object
    this.state = {
        //code
    }
}
```

### How to call setState() method
---

```javascript
class Subscribe extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome to my Youtube Channel'
        }
    }

    changeMessage(){
        //calling setState() method, which accepts an object, which is nothing but new state of the component. It can have two parameters, first will accept the object and another will be `callback` function.
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
```

## What is Destructuring of props and state ?

It is one of the feature of ES6, which unpacks the values from array or properties from an object into distinct variables. In react, destructuring of `props` and `state` improves code readablity. 

There are two ways of destructuring:
- in parameter
- in the function body 

### 1. In Paramter
---

- There is no need of writing props.name while destructuring.
- Here, basically we are abstracting the name and occupation from the props object.
- In JSX, we can use {name} and {occupation} instead of {props.name} and {props.occupation} directly respectively.

Create one functional component and write the below code:
```javascript
const Greet = ({name,occupation}) => {
  return (
    <div className='container'>
      <p>Hello, I am <span className='heading'>{name}</span> and I'm a <span className='heading'>{occupation}</span> </p>
    </div>
  )
}
```
and add the element in `App.js`, as given below
```
<Greet name='Dhruv Parmar' occupation='Jr.Web Developer' />
<Greet name='Sina' occupation='Youtuber of Advance Javascript' />
```

### 2. In the function body
---

It is quite similar to first method, after watching the demo you will come to know the difference.
```javascript
const Greet = props => {
    const {name, occupation} = props
    return(
        <div className='container'>
            <p>Hello, I am <span className='heading'>{name}</span> and I'm a <span className='heading'>{occupation}</span> </p>
        </div>
    )
}
```
