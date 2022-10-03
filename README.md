# React from the Scratch

- I have started learning React from the scratch from freeCodeCamp.org Youtube channel.
- React Course - Beginner's Tutorial for React JavaScript Library [2022] | freeCodeCamp.org
- I also prefer this channel as well "https://youtu.be/QFaFIcGhPoM"


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
