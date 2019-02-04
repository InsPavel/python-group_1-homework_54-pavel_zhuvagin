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

    deleteTask = (id) => {
        let taskId = this.state.tasks.findIndex(task =>
            task.id === id
        );

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({tasks})
        };

    render() {
        return (
            <div className="container">
                {this.state.tasks.map((task) => {
                    return <Task
                        key={task.id}
                        task={task.task}
                        onDelete={() => this.deleteTask(task.id)}
                    />
                    })
                }
            </div>
    );
    }
}

export default App;
