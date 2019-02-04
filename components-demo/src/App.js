import React, { Component } from 'react';
import './App.css';
import Task from "./Task/Task.js";

class App extends Component {
  state ={
    tasks: [
        {id: 1, task: 'Убрать мусор'},
        {id: 2, task: 'Сделать домашку'},
    ],
    };

  render() {
    return (
      <div className="container">
        {this.state.tasks.map((task) => {
          return <Task
              key={task.id}
              task={task.task}
          />
          })
        }
      </div>
    );
  }
}

export default App;
