import React from 'react'

const doThis = () => {
    // return(
    //     <div id="JSXDemo" className="JSX">
    //         <h1>Dhruv Parmar</h1>
    //     </div>
    // )

    //React.createElement(element name, return object, content)
    return React.createElement('div', {id: 'JSXDemo', className: 'JSX', style: {color: 'red'}}, React.createElement('h1', null, 'Dhruv Parmar'))
} 

export default doThis


