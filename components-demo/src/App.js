import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm.js'
import Task from "./Task/Task.js";

class App extends Component {
    state ={
        tasks: [
            {id: 1, task: 'Убрать мусор'},
            {id: 2, task: 'Сделать домашку'},
        ],
        currentTask: {task: ''},
    };

    deleteTask = (id) => {
        let taskId = this.state.tasks.findIndex(task =>
            task.id === id
        );

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({tasks})
        };

    changeTaskInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        let currentTask = {
            ...this.state.currentTask,
            [name]: value
        };

        this.setState({
            ...this.state,
            currentTask
        });
    };

    addTask = (event) => {
        event.preventDefault();
        let task = {...this.state.currentTask};
        const now = new Date();
        task.id = now.getDate();
        let tasks = [...this.state.tasks, task];
        this.setState({
            ...this.state,
            tasks,
            currentTask: {task: ''}
        });
    };

    isAddButtonDisabled = () => {
        return this.state.currentTask.task === ''
    };

    render() {
        return (
            <div className="container">
                <AddTaskForm
                    task={this.state.currentTask}
                    onChangeInput = {this.changeTaskInput}
                    onAddTask = {this.addTask}
                    isAddButtonDisabled={this.isAddButtonDisabled()}
                />
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
