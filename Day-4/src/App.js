import './App.css'
import React from 'react'
import PropTypeDemo from './components/PropTypeDemo'

function App () {
  return (
    <div className='app'>
      <PropTypeDemo name="Dhruv Parmar" age={21} hobbies={['Martial Art', 'Listen Songs', 'Read Bhagavad Gita', 'Drawing Art']} email={{ office: 'dhruv.parmar@yudiz.com', personal: 'dpparmar808@gmail.com' }} isDeveloper />

      {/* It will give me an error in console */}
      {/* <PropTypeDemo name={123} /> */}
    </div>
  )
}

export default App
