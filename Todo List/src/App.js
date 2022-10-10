import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';


class App extends Component {
  state = {
    item: [],
    text: ""
  }
  handleChange = e => {
    //it will target the input text
    this.setState({ text: e.target.value })
  }

  AddTask = event => {
    if(this.state.text === ""){
      alert('Please enter something...');
    }
    else if (this.state.text !== "") {
      //copying the item array and text in newItem using spread operator
      const newItem = [...this.state.item, this.state.text];
      this.setState({ item: newItem, text: "" })
    }
  }

  deleteTask = id => {
    // console.log("Delete button clicked.")

    var oldData = [...this.state.item];
    console.log("Old Data:",oldData);
    var newItem = oldData.filter((element, index) => {
      return index !== id;
    })
    //set the new data in item array
    console.log('New Data:',newItem);
    this.setState({ item: newItem })
  }
  render() {
    return (
      <>
        <div className='container'>
          <div className='todo-list'>
            <h1 className='heading'>Todo List</h1>
            <br />
            <div className='row mt-2'>
              <div className='col-lg-6'>
                <input className='form-control' type='text' placeholder='Write your todo here' id='txtInput' value={this.state.text} onChange={this.handleChange} />
              </div>
              <div className='col-lg-6'>
                <button className='btn btn-dark btn-sm' onClick={this.AddTask}>Add Task</button>
              </div>
            </div>

            <div className='container-fluid'>
              <ul className='list-unstyled row my-3'>
                {
                  this.state.item.map((value, index) => {
                    return <Task key={index} id={index} value={value} getData={this.deleteTask} />
                  })
                }
              </ul>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default App;
